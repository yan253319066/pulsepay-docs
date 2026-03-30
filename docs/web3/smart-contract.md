# 智能合约原理

## 什么是智能合约？

### 一句话解释

```
智能合约 = Smart Contract = 智能 + 合约

传统合约：
"如果 A 完成工作，B 付款给 A"
→ 需要律师/法官执行
→ 可能产生纠纷

智能合约：
if (A完成工作 == true) {
  自动转账;
}
→ 代码即法律
→ 自动执行，无人可阻止
```

## 智能合约的工作原理

### 1. 代码部署

```
1. 开发者编写合约代码
   Solidity 示例：
   ```solidity
   contract PulsePayStake {
     uint256 public rewardRate = 40;
     
     function stake(uint256 amount) public {
       // 质押逻辑
     }
   }
   ```

2. 编译成字节码

3. 部署到区块链
   - 支付 Gas 费
   - 获得合约地址

4. 合约上链
   - 永久存在
   - 不可篡改
```

### 2. 调用执行

```
用户调用合约：

1. 用户发起交易
   transaction = {
     to: "0x1234...(合约地址)",
     data: "stake(1000)"
   }

2. 交易被打包进区块
   - 矿工/验证者执行合约
   - 计算 Gas 费用

3. 状态更新
   - 质押记录更新
   - 余额变化

4. 交易确认
   - 交易写入区块链
   - 结果不可逆转
```

## 以太坊虚拟机 (EVM)

### 什么是 EVM？

```
EVM = Ethereum Virtual Machine

类似：
- Java 虚拟机 (JVM) → 运行 Java 代码
- EVM → 运行 Solidity 代码

特点：
- 图灵完备（可以计算任何逻辑）
- 沙盒运行（安全隔离）
- 确定性（相同输入→相同输出）
```

### Gas 的概念

```
Gas = 执行合约的"燃料"

类比：
- 开车需要汽油
- 执行合约需要 Gas

Gas 费用 = Gas 单价 × Gas 消耗量

示例：
- 转账 ETH：21000 Gas
- 转账 ERC-20：65000 Gas
- 复杂 DeFi 操作：100000-500000 Gas

Gas 单价由市场决定：
- 网络拥堵 → Gas 涨价
- BSC：Gas 单价低（约 5 Gwei）
- ETH：Gas 单价高（波动大）
```

## 智能合约的结构

### 标准 ERC-20 代币合约

```
主要函数：

1. 转账
   function transfer(address to, uint256 amount)
   
2. 授权
   function approve(address spender, uint256 amount)
   
3. 转移授权
   function transferFrom(address from, address to, uint256 amount)
   
4. 查询
   function balanceOf(address account)
   function allowance(address owner, address spender)
   function totalSupply()
```

### PulsePay 收益合约示例

```solidity
// 简化示例
contract PulsePayRewards {
    // 总质押量
    uint256 public totalStaked;
    
    // 用户质押量
    mapping(address => uint256) public stakes;
    
    // 质押函数
    function stake(uint256 amount) external {
        require(amount >= 10, "Min 10 AIP");
        
        // 转入 AIP
        IERC20(AIP).transferFrom(msg.sender, address(this), amount);
        
        // 更新状态
        stakes[msg.sender] += amount;
        totalStaked += amount;
    }
    
    // 领取奖励
    function claim() external {
        uint256 reward = calculateReward(msg.sender);
        // 发放奖励
        USDT.transfer(msg.sender, reward);
    }
}
```

## 智能合约的限制

### 1. 数据来源问题

```
智能合约只能访问链上数据

问题：
- 无法直接获取链下数据
- 不知道 BTC 价格
- 不知道天气情况

解决方案：预言机 (Oracle)

Chainlink 工作流程：
┌──────────────────────────────────────┐
│  价格数据源（Coinbase、Binance...）   │
└──────────────────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│  Chainlink 预言机网络                 │
│  （去中心化聚合数据）                  │
└──────────────────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│  智能合约                             │
│  （获得可信的价格数据）                 │
└──────────────────────────────────────┘
```

### 2. 升级问题

```
传统软件：可以随时更新
智能合约：部署后不可更改

风险：
- 发现 bug 无法修复
- 发现漏洞无法修补

解决方案：
1. 代理模式（Proxy Pattern）
2. 钻石模式（Diamond Pattern）
3. 时间锁升级（Timelock）

PulsePay 采用：
- 多签控制
- 时间锁升级
- 渐进式去中心化
```

## 智能合约安全

### 常见攻击类型

| 攻击类型 | 原理 | 防范 |
|----------|------|------|
| 重入攻击 | 递归调用提取资金 | 检查-生效-交互模式 |
| 整数溢出 | 数值计算错误 | 使用 SafeMath |
| 闪电贷攻击 | 利用大额资金操纵价格 | 价格预言机保护 |
| 前置运行 | 机器人复制交易 | MEV 保护 |

### 安全措施

```
1. 代码审计
   - 第三方安全公司审计
   - 开源代码供社区审查

2. 测试覆盖
   - 单元测试
   - 集成测试
   - 形式化验证

3. 限制权限
   - 多签控制
   - 时间锁
   - 紧急暂停

4. 监控告警
   - 链上监控
   - 异常交易告警
   - 自动熔断
```

## 智能合约的gas优化

### 为什么需要优化？

```
Gas 费用 = 执行成本

优化好处：
- 节省费用
- 提高交易成功率
- 更好的用户体验
```

### 常用技巧

```solidity
// ❌ 浪费 Gas
uint256 public totalStaked; // 存储在链上

function getReward() view returns (uint256) {
    return totalStaked * rewardRate / 100;
}

// ✅ 节省 Gas
// 减少链上存储读取
// 使用事件而非存储
```

### Gas 优化原则

```
1. 减少链上存储
   - 使用 memory 而非 storage
   - 批量操作减少交易数

2. 优化数据结构
   - 紧凑排列变量
   - 使用 bytes32 而非 string

3. 避免重复计算
   - 缓存计算结果
   - 使用常量

4. 简化逻辑
   - 合并条件判断
   - 删除无效代码
```

## 智能合约与 PulsePay

```
PulsePay 的合约架构：

┌──────────────────────────────────────┐
│  AIP Token 合约                      │
│  - ERC-20 标准                       │
│  - 转账、授权、快照                   │
└──────────────────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│  收益分成合约                          │
│  - 质押管理                           │
│  - 收益计算                           │
│  - 领取逻辑                           │
└──────────────────────────────────────┘
              ↓
┌──────────────────────────────────────┐
│  收入管理合约                          │
│  - 收入收集                           │
│  - 分配执行                           │
│  - 链上记录                           │
└──────────────────────────────────────┘
```

### 安全措施

```
✅ 第三方审计
   CertiK 安全审计

✅ 时间锁
   关键操作需 24-48 小时延迟

✅ 多签控制
   团队资金多签管理

✅ 紧急暂停
   内置合约暂停机制

✅ 渐进式去中心化
   Phase 1-3 分阶段开放
```

::: tip 💡 查看合约
所有 PulsePay 智能合约已在 BSC 链上公开，可在 [bscscan.com](https://bscscan.com) 查看源代码。
:::

## 下一步

- [DAO 组织](../web3/dao) — 去中心化治理
- [Web3 安全](../web3/security) — 保护你的资产
