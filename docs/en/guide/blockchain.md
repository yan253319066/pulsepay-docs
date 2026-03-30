# What is Blockchain?

## Understanding Blockchain with a Story

### Traditional vs Blockchain Accounting

Imagine you need to keep accounts with a group of friends:

**Traditional Way (Centralized):**
```
You chose Xiao Ming as accountant
All accounts are in Xiao Ming's book
Problem: What if Xiao Ming cheats?
```

**Blockchain Way (Decentralized):**
```
Everyone has a ledger
Every transaction is broadcast to everyone
Everyone records simultaneously
Problem: Who remembers most accurately? Everyone verifies together!
```

## Core Principles of Blockchain

### 1. 🧱 What is a Block?

Like a row in an Excel spreadsheet, each block contains:

```
┌─────────────────────────────┐
│         Block #12345         │
├─────────────────────────────┤
│ Timestamp: 2026-03-30 10:00│
├─────────────────────────────┤
│ Tx1: Alice → Bob 1 BTC     │
│ Tx2: Charlie → Alice 0.5 BTC│
│ Tx3: ...                   │
├─────────────────────────────┤
│ Prev Block Hash: abc123... │
│ This Block Hash: def456... │
└─────────────────────────────┘
```

### 2. 🔗 How is the Chain Formed?

```
Block12345 → Block12346 → Block12347 → ...
     ↓            ↓            ↓
   Hash Ref    Hash Ref    Hash Ref
```

Each block contains the "fingerprint (hash) of the previous block", like DNA!

## Blockchain Types

| Type | Examples | Features | Speed |
|------|----------|----------|-------|
| **Public Chain** | Bitcoin, Ethereum | Anyone can participate | Slow |
| **Consortium Chain** | BSC, Polygon | Permissioned nodes | Fast |
| **Private Chain** | Enterprise internal | Single party control | Fastest |

### What is BSC (Binance Smart Chain)?

```
BSC = Binance Smart Chain

Analogy:
- Ethereum = Toll highway
- BSC = Another highway built by Binance
  - Cheaper tolls
  - Faster
  - Compatible with Ethereum

PulsePay runs on BSC, like operating services on this highway.
```

## Next Steps

- [Crypto Basics](../guide/crypto) - Learn about "currency" on blockchain
- [What is DeFi?](../guide/defi) - Learn about decentralized finance
