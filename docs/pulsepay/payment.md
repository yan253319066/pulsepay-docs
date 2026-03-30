# 支付系统详解

## 什么是 PulsePay 支付系统？

```
支付系统 = 加密货币的"支付宝"

功能：
- 充值
- 消费
- 提现
- 支付

支持：
- USDT
- BNB
- 更多币种陆续支持
```

## 支持的区块链

### BSC (Binance Smart Chain)

```
网络：BSC Mainnet
Chain ID：56
符号：BNB
RPC：https://bsc-dataseed.binance.org/

特点：
- 低 Gas 费
- 快速确认
- 兼容 EVM
```

### TRON

```
网络：TRON Mainnet
Chain ID：tron
符号：TRX
RPC：https://api.trongrid.io/

特点：
- 零 Gas 费（能量消耗）
- 快速确认
- USDT-TRC20 广泛使用
```

### Ethereum

```
网络：Ethereum Mainnet
Chain ID：1
符号：ETH
RPC：https://eth.llamarpc.com/

特点：
- 生态最大
- Gas 费较高
- 资产最丰富
```

## 支持的资产

### 稳定币

| 资产 | 网络 | 特点 |
|------|------|------|
| USDT | TRC-20 | 最便宜 |
| USDT | ERC-20 | 最广泛 |
| USDT | BEP-20 | 平衡之选 |
| USDC | ERC-20 | 完全抵押 |

### 主流币

| 资产 | 网络 | 用途 |
|------|------|------|
| BNB | BSC | Gas 费支付 |
| ETH | ETH | Gas 费支付 |
| TRX | TRON | 能量补充 |

## 充值指南

### 步骤一：获取充值地址

```
1. 登录 app.pulsepay.fun
2. 点击"充值"
3. 选择币种和网络
4. 复制充值地址

⚠️ 注意：
- 必须选择正确的网络！
- USDT TRC-20 ≠ USDT ERC-20
- 错网络 = 资产永久丢失！
```

### 步骤二：发起转账

```
从交易所提现：

1. 登录交易所（币安/OKX）
2. 进入"提现"页面
3. 选择币种（USDT）
4. 选择网络（必须和充值页一致！）
5. 粘贴充值地址
6. 输入提现金额
7. 确认提现
```

### 步骤三：等待确认

```
确认流程：

充值 TRC-20：约 1 分钟
充值 ERC-20：约 5-15 分钟
充值 BEP-20：约 1 分钟

查看进度：
- 在对应区块链浏览器查询
- 等待 1-3 个区块确认
```

### 充值注意事项

```
⚠️ 重要提醒：

1. 网络必须匹配
   - 充值页显示什么网络
   - 提现就选什么网络
   
2. 地址必须正确
   - 复制粘贴，不要手动输入
   - 前后几位仔细核对

3. 最小充值金额
   - USDT 通常 1 USDT 起
   - 低于最小值可能丢失

4. Memo/Tag
   - TRON 网络可能需要
   - 充值页面会提示
```

## 消费指南

### 场景一：AI Gateway 消费

```
使用 AI API：

1. 充值 USDT 到 PulsePay
2. 在 AI Gateway 消费
3. 自动按量扣费

消费明细：
- 模型调用费用
- Token 消耗
- 实时从余额扣除
```

### 场景二：兑换 AIP

```
使用 USDT 兑换 AIP：

1. 访问 stake.pulsepay.fun
2. 连接钱包
3. 选择"兑换"功能
4. 输入 USDT 数量
5. 确认兑换

Phase 1 价格：
- 1 USDT = 1 AIP
- 最低 10 USDT 起
```

## 提现指南

### 步骤一：发起提现

```
1. 登录 app.pulsepay.fun
2. 点击"提现"
3. 选择币种和网络
4. 输入目标地址
5. 输入提现金额
```

### 步骤二：确认信息

```
提现前确认：

□ 币种正确
□ 网络正确（BSC/TRON/ETH）
□ 地址正确
□ 金额正确
□ 手

网络手续费：
- TRC-20：1 USDT
- ERC-20：约 5-10 USDT
- BEP-20：约 0.5 USDT
```

### 步骤三：等待到账

```
提现到账时间：

TRC-20：约 1-3 分钟
ERC-20：约 5-30 分钟
BEP-20：约 1-5 分钟

查看进度：
- 在区块链浏览器查询
- 使用 TxID 查询
```

## 支付 API

### 创建订单

```
POST /v1/order/create

{
  "amount": 100,
  "symbol": "USDT",
  "chain": "BSC",
  "orderId": "your_order_id",
  "uid": "user_id"
}
```

### 查询订单

```
GET /v1/order/status/{orderId}
```

### Webhook 回调

```
支付成功后的通知：

POST your_webhook_url
{
  "notifyType": "RECHARGE",
  "orderId": "xxx",
  "transaction": {
    "status": "SUCCESS",
    "txid": "xxx",
    "amount": 100
  }
}
```

## 安全措施

### 冷热钱包分离

```
热钱包：
- 日常运营用
- 限额控制
- 在线存储

冷钱包：
- 大量资产存储
- 完全离线
- 多签管理
```

### 实时监控

```
系统监控：
- 异常交易告警
- 大额转账审核
- 风险控制

风控措施：
- 黑名单地址
- 可疑行为识别
- 人工审核
```

### 多重验证

```
操作验证：
- 登录验证码
- 提现验证码
- 大额二次确认

安全级别：
- 基础：手机验证码
- 高级：Google Authenticator
```

## 费用说明

### 充值费用

```
充值手续费：
- 站内转账：免费
- 链上充值：网络 Gas 费（用户承担）

Gas 费参考：
- TRC-20：几乎为零
- BEP-20：约 0.5-1 USDT
- ERC-20：约 5-15 USDT
```

### 提现费用

```
提现手续费：
- TRC-20：1 USDT
- BEP-20：0.5 USDT
- ERC-20：5 USDT

⚠️ 注意：
手续费可能调整
以官网实际显示为准
```

### 交易费用

```
AI Gateway 费用：
- 按模型定价
- 实时计费
- 从余额扣除

兑换费用：
- Phase 1：无额外费用
- 1 USDT = 1 AIP
```

## 常见问题

### Q：充值多久到账？

A：根据网络不同：
- TRC-20：1 分钟
- BEP-20：1 分钟
- ERC-20：5-15 分钟

### Q：转错网络怎么办？

A：**基本无法找回！**
- 资产可能永久丢失
- 联系客服不一定能解决
- 务必选择正确网络！

### Q：提现多久到账？

A：根据网络不同：
- TRC-20：1-3 分钟
- BEP-20：1-5 分钟
- ERC-20：5-30 分钟

### Q：最低充值/提现金额是多少？

A：
- USDT 充值：1 USDT 起
- USDT 提现：10 USDT 起
- BNB 充值：0.01 BNB 起

::: tip 💡 开始使用
访问 [app.pulsepay.fun](https://app.pulsepay.fun) 管理你的资产。
:::

## 下一步

- [收益分成详解](./revenue-share) — 了解更多收益机制
- [AI Gateway](./ai-gateway) — 了解 AI 支付
