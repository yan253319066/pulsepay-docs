# Smart Contract Principles

## What are Smart Contracts?

### One-Line Explanation

```
Smart Contract = Smart + Contract

Traditional Contract:
"If A completes work, B pays A"
→ Requires lawyer/judge to enforce
→ May cause disputes

Smart Contract:
if (A completes work == true) {
  auto transfer;
}
→ Code is law
→ Auto-executes, no one can stop
```

## How Smart Contracts Work

### 1. Code Deployment

```
1. Developer writes contract code
   Solidity Example:
   ```solidity
   contract PulsePayStake {
     uint256 public rewardRate = 40;
     
     function stake(uint256 amount) public {
       // Staking logic
     }
   }
   ```

2. Compile to bytecode

3. Deploy to blockchain
   - Pay Gas fee
   - Get contract address

4. Contract on-chain
   - Permanent existence
   - Immutable
```

### 2. Execution via Calls

```
User calls contract:

1. User initiates transaction
   transaction = {
     to: "0x1234...(contract address)",
     data: "stake(1000)"
   }

2. Transaction packaged into block
   - Miner/validator executes contract
   - Calculates Gas fees

3. State update
   - Staking record updated
   - Balance changes

4. Transaction confirmed
   - Written to blockchain
   - Irreversible result
```

## Ethereum Virtual Machine (EVM)

### What is EVM?

```
EVM = Ethereum Virtual Machine

Similar to:
- Java Virtual Machine (JVM) → Runs Java code
- EVM → Runs Solidity code

Features:
- Turing complete (can compute any logic)
- Sandboxed (secure isolation)
- Deterministic (same input → same output)
```

### The Concept of Gas

```
Gas = "Fuel" for contract execution

Analogy:
- Driving needs gasoline
- Executing contract needs Gas

Gas fee = Gas price × Gas consumed

Example:
- Transfer ETH: 21000 Gas
- Transfer ERC-20: 65000 Gas
- Complex DeFi operation: 100000-500000 Gas

Gas price determined by market:
- Network congestion → Gas price rises
- BSC: Low gas price (~5 Gwei)
- ETH: High gas price (volatile)
```

## Smart Contract Structure

### Standard ERC-20 Token Contract

```
Main functions:

1. Transfer
   function transfer(address to, uint256 amount)
   
2. Approve
   function approve(address spender, uint256 amount)
   
3. Transfer From
   function transferFrom(address from, address to, uint256 amount)
   
4. Queries
   function balanceOf(address account)
   function allowance(address owner, address spender)
   function totalSupply()
```

### PulsePay Rewards Contract Example

```solidity
// Simplified example
contract PulsePayRewards {
    // Total staked
    uint256 public totalStaked;
    
    // User stakes
    mapping(address => uint256) public stakes;
    
    // Stake function
    function stake(uint256 amount) external {
        require(amount >= 10, "Min 10 AIP");
        
        // Transfer AIP
        IERC20(AIP).transferFrom(msg.sender, address(this), amount);
        
        // Update state
        stakes[msg.sender] += amount;
        totalStaked += amount;
    }
    
    // Claim rewards
    function claim() external {
        uint256 reward = calculateReward(msg.sender);
        // Distribute rewards
        USDT.transfer(msg.sender, reward);
    }
}
```

## Smart Contract Limitations

### 1. Data Source Problem

```
Smart contracts can only access on-chain data

Problem:
- Cannot directly get off-chain data
- Don't know BTC price
- Don't know weather

Solution: Oracle

Chainlink workflow:
┌──────────────────────────────────────┐
│  Price data sources (Coinbase, Binance...)  │
└──────────────────────────────────────┘
               ↓
┌──────────────────────────────────────┐
│  Chainlink Oracle Network            │
│  (Decentralized data aggregation)   │
└──────────────────────────────────────┘
               ↓
┌──────────────────────────────────────┐
│  Smart Contract                     │
│  (Gets trusted price data)          │
└──────────────────────────────────────┘
```

### 2. Upgrade Problem

```
Traditional software: Can update anytime
Smart contracts: Immutable after deployment

Risk:
- Bug found but cannot fix
- Vulnerability found but cannot patch

Solutions:
1. Proxy Pattern
2. Diamond Pattern
3. Timelock Upgrade

PulsePay uses:
- Multi-sig control
- Timelock upgrades
- Progressive decentralization
```

## Smart Contract Security

### Common Attack Types

| Attack Type | Principle | Prevention |
|-------------|----------|------------|
| Reentrancy | Recursive calls drain funds | Check-effects-interactions |
| Integer Overflow | Calculation errors | Use SafeMath |
| Flash Loan | Use large funds to manipulate price | Oracle protection |
| Front Running | Bots copy trades | MEV protection |

### Security Measures

```
1. Code Audits
   - Third-party security firm audit
   - Open source for community review

2. Test Coverage
   - Unit tests
   - Integration tests
   - Formal verification

3. Permission Controls
   - Multi-sig control
   - Timelock
   - Emergency pause

4. Monitoring Alerts
   - On-chain monitoring
   - Anomalous transaction alerts
   - Auto-circuit breaker
```

## Smart Contract Gas Optimization

### Why Optimize?

```
Gas fees = Execution cost

Benefits of optimization:
- Save costs
- Higher transaction success rate
- Better user experience
```

### Common Techniques

```solidity
// ❌ Wasteful Gas
uint256 public totalStaked; // Stored on-chain

function getReward() view returns (uint256) {
    return totalStaked * rewardRate / 100;
}

// ✅ Gas Saving
// Reduce on-chain storage reads
// Use events instead of storage
```

### Gas Optimization Principles

```
1. Reduce on-chain storage
   - Use memory instead of storage
   - Batch operations to reduce transactions

2. Optimize data structures
   - Tightly pack variables
   - Use bytes32 instead of string

3. Avoid redundant calculations
   - Cache results
   - Use constants

4. Simplify logic
   - Merge conditionals
   - Delete dead code
```

## Smart Contracts and PulsePay

```
PulsePay contract architecture:

┌──────────────────────────────────────┐
│  AIP Token Contract                  │
│  - ERC-20 standard                   │
│  - Transfer, approve, snapshots       │
└──────────────────────────────────────┘
               ↓
┌──────────────────────────────────────┐
│  Revenue Share Contract              │
│  - Staking management               │
│  - Revenue calculation              │
│  - Claim logic                      │
└──────────────────────────────────────┘
               ↓
┌──────────────────────────────────────┐
│  Revenue Management Contract         │
│  - Revenue collection               │
│  - Distribution execution           │
│  - On-chain records                 │
└──────────────────────────────────────┘
```

### Security Measures

```
✅ Third-party Audit
   CertiK security audit

✅ Timelock
   Key operations require 24-48 hour delay

✅ Multi-sig Control
   Team funds multi-sig management

✅ Emergency Pause
   Built-in contract pause mechanism

✅ Progressive Decentralization
   Phase 1-3 gradual opening
```

::: tip 💡 View Contracts
All PulsePay smart contracts are publicly available on BSC chain, view source code at [bscscan.com](https://bscscan.com).
:::

## Next Steps

- [DAO Organization](/en/web3/dao) — Decentralized governance
- [Web3 Security](/en/web3/security) — Protect your assets
