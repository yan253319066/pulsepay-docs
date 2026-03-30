# How PulsePay Works

## Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Layer                            │
│                   PulseWallet (app.pulsepay.fun)            │
│              Users manage assets, participate in revenue    │
└─────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                    AI Gateway Layer                         │
│                   ai.pulsepay.fun                          │
│            Unified AI access, support multiple models       │
│            • OpenAI GPT-4 • Claude 3 • Gemini              │
└─────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                      Payment Layer                          │
│                    pulsepay.fun                             │
│              USDT/BNB recharge, consumption, withdrawal    │
└─────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                      Protocol Layer                         │
│              AIP Token + Revenue Share Contract            │
│         Revenue auto-distribution, transparent on-chain     │
└─────────────────────────────────────────────────────────────┘
```

## User Flow

### Step 1: Register and Recharge

```
1. Visit app.pulsepay.fun
2. Create or import wallet
3. Recharge USDT/BNB

Supported chains:
- BSC (BEP-20)
- TRON (TRC-20)
- ETH (ERC-20)
```

### Step 2: Get API Key

```
1. Visit ai.pulsepay.fun
2. Register/login account
3. Recharge balance
4. Get API Key

API Key format:
ppa_live_xxxxxxxxxxxxxxxxxxxx
```

### Step 3: Call AI

```
Developers use API:

curl https://api.pulsepay.fun/v1/ai/chat \
  -H "X-API-TOKEN: ppa_live_xxxx" \
  -H "Content-Type: application/json" \
  -d '{"model": "gpt-4", "messages": [...]}'

Pay-per-use, auto-deduct
```

### Step 4: Earn Revenue (Hold AIP)

```
Hold AIP → Stake to participate in revenue sharing
        ↓
Daily receive platform revenue dividends (USDT/BNB)
        ↓
Continuous earnings, passive income
```

## Revenue Distribution Mechanism

### Revenue Sources

```
AI Gateway revenue = AI call fees
Payment system revenue = Payment processing fees

Each transaction:
- User pays 100 USDT
- Platform charges 1 USDT fee (1%)
- This 1 USDT is the "revenue"
```

### Distribution Ratio

```
Daily platform revenue distribution:

┌────────────────────────────────────────┐
│           100% Platform Revenue         │
├────────────────────────────────────────┤
│                                        │
│  40% ─────────────────→ AIP Staker Dividends │
│                                        │
│  30% ─────────────────→ Buyback & Burn AIP │
│                                        │
│  20% ─────────────────→ Team Operations │
│                                        │
│  10% ─────────────────→ Ecosystem Incentives │
│                                        │
└────────────────────────────────────────┘
```

### Calculation Example

```
Assumptions:
- Today's platform revenue: 10,000 USDT
- Revenue share ratio: 40%
- Your AIP stake: 10,000 AIP
- Total network AIP stake: 1,000,000 AIP

Calculation:
┌─────────────────────────────────────────────┐
│ Distributable: 10,000 × 40% = 4,000 USDT  │
├─────────────────────────────────────────────┤
│ Your share: 10,000 / 1,000,000 = 1%       │
├─────────────────────────────────────────────┤
│ Your revenue: 4,000 × 1% = 40 USDT        │
└─────────────────────────────────────────────┘

Annualized (assuming daily revenue unchanged):
- Daily: 40 USDT
- Annual: 14,600 USDT
- Annualized: 146% (based on 10,000 USDT investment)
```

## Economic Flywheel

```
┌──────────────────────────────────────────────┐
│                                              │
│    More users use AI Gateway                 │
│              ↓                               │
│    More revenue (AI fees + payment fees)     │
│              ↓                               │
│    More dividends + More buyback & burn     │
│              ↓                               │
│    AIP Token value increases                 │
│              ↓                               │
│    Attract more users to buy AIP            │
│              ↓                               │
│    More funds enter platform                 │
│              ↓                               │
│    Platform has more resources               │
│              ↓                               │
│    More users use AI Gateway                 │
│              ↓                               │
│         (Flywheel accelerates ♻️)           │
│                                              │
└──────────────────────────────────────────────┘
```

## AIP Token Value Support

### 1. Usage Value

```
Hold AIP = "Ticket" to use platform

- AIP stake for revenue sharing
- May be used for AI service payment in future
- More holdings may mean higher revenue share
```

### 2. Deflation Mechanism

```
30% revenue used for buyback & burn

Mechanism:
1. Use 30% revenue to buy back AIP from market daily
2. Burn these AIP (permanent removal)
3. Circulating supply decreases
4. Supply decreases → Value support
```

### 3. Demand Driven

```
Users need AIP to:
- Participate in revenue sharing
- Share platform growth dividends

Demand sources:
- AI users → Want dividends → Buy AIP
- Investors → Bullish on project → Buy AIP
- Ecosystem incentives → Attract more users
```

## Smart Contract Architecture

### AIP Token Contract

```
Standard: ERC-20 (BSC chain)

Main functions:
- Transfer: transfer()
- Approve: approve()
- Snapshot: Record stake token balance

Contract address: View on BSCScan
```

### Revenue Share Contract

```
Main functions:
- stake(): Stake AIP
- unstake(): Unstake
- claim(): Claim revenue
- getReward(): Calculate due revenue

Features:
- No lock period
- Exit anytime
- Real-time revenue calculation
```

### Revenue Management Contract

```
Main functions:
- Collect daily revenue
- Auto-distribute (40%/30%/20%/10%)
- Record each distribution on-chain

Transparency:
- Anyone can verify on-chain
- Contract code open source
```

## Security Design

### Contract Security

```
✅ Third-party Audit
   CertiK security audit

✅ Timelock
   Key operations require 24-48 hour delay

✅ Multi-sig Control
   Team funds multi-sig management

✅ Emergency Pause
   Built-in contract pause mechanism
```

### Fund Security

```
✅ Progressive Opening
   Phase 1-3 gradual opening
   Controllable risk

✅ Revenue Transparency
   Publicly verifiable on-chain

✅ Open Source Contracts
   Code verifiable
```

## How to Participate

### Step 1: Preparation

```
Required tools:
1. Crypto wallet (MetaMask or PulseWallet)
2. Small amount of BNB (for Gas fees)
3. USDT (for exchanging AIP)
```

### Step 2: Get AIP

```
Method 1: Official exchange
1. Visit stake.pulsepay.fun
2. Connect wallet
3. Use USDT/BNB to exchange AIP
4. Phase 1 fixed price: 1 USDT = 1 AIP

Method 2: Secondary market
- After Phase 2 opens
- Can trade on DEX
```

### Step 3: Stake to Participate

```
1. Visit stake.pulsepay.fun
2. Connect wallet
3. Stake AIP
4. Minimum 10 AIP
5. Start earning daily revenue
```

### Step 4: Claim Revenue

```
1. View revenue dashboard
2. Click "Claim" button
3. Revenue transfers to wallet

Revenue distribution:
- Auto-calculated daily revenue
- Need manual click to claim
- Can unstake anytime
```

## Next Steps

- [AI Gateway Details](/en/pulsepay/ai-gateway) — Unified AI access
- [Revenue Share Details](/en/pulsepay/revenue-share) — Detailed revenue calculation
- [Get Started](/en/pulsepay/get-started) — Participate now
