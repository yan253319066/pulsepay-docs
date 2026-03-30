# 支付系統詳解

## 什麼是 PulsePay 支付系統？

```
支付系統 = 加密貨幣的"支付寶"

功能：
- 充值
- 消費
- 提現
- 支付

支持：
- USDT
- BNB
- 更多幣種陸續支持
```

## 支持的區塊鏈

### BSC (Binance Smart Chain)

```
網路：BSC Mainnet
Chain ID：56
符號：BNB
RPC：https://bsc-dataseed.binance.org/

特點：
- 低 Gas 費
- 快速確認
- 兼容 EVM
```

### TRON

```
網路：TRON Mainnet
Chain ID：tron
符號：TRX
RPC：https://api.trongrid.io/

特點：
- 零 Gas 費（能量消耗）
- 快速確認
- USDT-TRC20 廣泛使用
```

### Ethereum

```
網路：Ethereum Mainnet
Chain ID：1
符號：ETH
RPC：https://eth.llamarpc.com/

特點：
- 生態最大
- Gas 費較高
- 資產最豐富
```

## 支持的資產

### 穩定幣

| 資產 | 網路 | 特點 |
|------|------|------|
| USDT | TRC-20 | 最便宜 |
| USDT | ERC-20 | 最廣泛 |
| USDT | BEP-20 | 平衡之選 |
| USDC | ERC-20 | 完全抵押 |

### 主流幣

| 資產 | 網路 | 用途 |
|------|------|------|
| BNB | BSC | Gas 費支付 |
| ETH | ETH | Gas 費支付 |
| TRX | TRON | 能量補充 |

## 充值指南

### 步驟一：獲取充值地址

```
1. 登錄 app.pulsepay.fun
2. 點擊"充值"
3. 選擇幣種和網路
4. 複製充值地址

⚠️ 注意：
- 必須選擇正確的網路！
- USDT TRC-20 ≠ USDT ERC-20
- 錯網路 = 資產永久丟失！
```

### 步驟二：發起轉帳

```
從交易所提現：

1. 登錄交易所（幣安/OKX）
2. 進入"提現"頁面
3. 選擇幣種（USDT）
4. 選擇網路（必須和充值頁一致！）
5. 粘貼充值地址
6. 輸入提現金額
7. 確認提現
```

### 步驟三：等待確認

```
確認流程：

充值 TRC-20：約 1 分鐘
充值 ERC-20：約 5-15 分鐘
充值 BEP-20：約 1 分鐘

查看進度：
- 在對應區塊鏈瀏覽器查詢
- 等待 1-3 個區塊確認
```

### 充值注意事項

```
⚠️ 重要提醒：

1. 網路必須匹配
   - 充值頁顯示什麼網路
   - 提現就選什麼網路
   
2. 地址必須正確
   - 複製粘貼，不要手動輸入
   - 前後幾位仔細核對

3. 最小充值金額
   - USDT 通常 1 USDT 起
   - 低於最小值可能丟失

4. Memo/Tag
   - TRON 網路可能需要
   - 充值頁面會提示
```

## 消費指南

### 場景一：AI Gateway 消費

```
使用 AI API：

1. 充值 USDT 到 PulsePay
2. 在 AI Gateway 消費
3. 自動按量扣費

消費明細：
- 模型調用費用
- Token 消耗
- 即時從餘額扣除
```

### 場景二：兌換 AIP

```
使用 USDT 兌換 AIP：

1. 訪問 stake.pulsepay.fun
2. 連接錢包
3. 選擇"兌換"功能
4. 輸入 USDT 數量
5. 確認兌換

Phase 1 價格：
- 1 USDT = 1 AIP
- 最低 10 USDT 起
```

## 提現指南

### 步驟一：發起提現

```
1. 登錄 app.pulsepay.fun
2. 點擊"提現"
3. 選擇幣種和網路
4. 輸入目標地址
5. 輸入提現金額
```

### 步驟二：確認資訊

```
提現前確認：

□ 幣種正確
□ 網路正確（BSC/TRON/ETH）
□ 地址正確
□ 金額正確
□ 網路手續費合理

網路手續費：
- TRC-20：1 USDT
- ERC-20：約 5-10 USDT
- BEP-20：約 0.5 USDT
```

### 步驟三：等待到帳

```
提現到帳時間：

TRC-20：約 1-3 分鐘
ERC-20：約 5-30 分鐘
BEP-20：約 1-5 分鐘

查看進度：
- 在區塊鏈瀏覽器查詢
- 使用 TxID 查詢
```

## 支付 API

### 創建訂單

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

### 查詢訂單

```
GET /v1/order/status/{orderId}
```

### Webhook 回調

```
支付成功後的通知：

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

### 冷熱錢包分離

```
熱錢包：
- 日常運營用
- 限額控制
- 在線存儲

冷錢包：
- 大量資產存儲
- 完全離線
- 多籤管理
```

### 即時監控

```
系統監控：
- 異常交易告警
- 大額轉帳審核
- 風險控制

風控措施：
- 黑名單地址
- 可疑行為識別
- 人工審核
```

### 多重驗證

```
操作驗證：
- 登錄驗證碼
- 提現驗證碼
- 大額二次確認

安全級別：
- 基礎：手機驗證碼
- 高級：Google Authenticator
```

## 費用說明

### 充值費用

```
充值手續費：
- 站內轉帳：免費
- 鏈上充值：網路 Gas 費（用戶承擔）

Gas 費參考：
- TRC-20：幾乎為零
- BEP-20：約 0.5-1 USDT
- ERC-20：約 5-15 USDT
```

### 提現費用

```
提現手續費：
- TRC-20：1 USDT
- BEP-20：0.5 USDT
- ERC-20：5 USDT

⚠️ 注意：
手續費可能調整
以官網實際顯示為準
```

### 交易費用

```
AI Gateway 費用：
- 按模型定價
- 即時計費
- 從餘額扣除

兌換費用：
- Phase 1：無額外費用
- 1 USDT = 1 AIP
```

## 常見問題

### Q：充值多久到帳？

A：根據網路不同：
- TRC-20：1 分鐘
- BEP-20：1 分鐘
- ERC-20：5-15 分鐘

### Q：轉錯網路怎麼辦？

A：**基本無法找回！**
- 資產可能永久丟失
- 聯繫客服不一定能解決
- 務必選擇正確網路！

### Q：提現多久到帳？

A：根據網路不同：
- TRC-20：1-3 分鐘
- BEP-20：1-5 分鐘
- ERC-20：5-30 分鐘

### Q：最低充值/提現金額是多少？

A：
- USDT 充值：1 USDT 起
- USDT 提現：10 USDT 起
- BNB 充值：0.01 BNB 起

::: tip 💡 開始使用
訪問 [app.pulsepay.fun](https://app.pulsepay.fun) 管理你的資產。
:::

## 下一步

- [收益分成詳解](./revenue-share) — 了解更多收益機制
- [AI Gateway](./ai-gateway) — 了解 AI 支付
