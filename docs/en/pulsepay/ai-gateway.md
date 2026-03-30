# AI Gateway Details

## What is AI Gateway?

```
AI Gateway = AI Unified Entry Point

Pain Points:
- OpenAI account?
- Anthropic account?
- Google AI account?
- Each requires separate registration and balance

AI Gateway:
One account → Multiple AI models
Unified billing → USDT/BNB payment
One invoice → Clear and simple
```

## Supported AI Models

### OpenAI Series

| Model | Feature | Use Case |
|-------|---------|----------|
| GPT-4o | Latest, most powerful, multimodal | Complex tasks |
| GPT-4-Turbo | Fast version of GPT-4 | Speed-critical scenarios |
| GPT-3.5-Turbo | Cheap and fast | Simple tasks |

### Anthropic Series

| Model | Feature | Use Case |
|-------|---------|----------|
| Claude 3.5 Sonnet | High cost-performance | Daily conversation |
| Claude 3 Opus | Most powerful | Complex reasoning |
| Claude 3 Haiku | Fastest, cheapest | Simple tasks |

### Google Series

| Model | Feature | Use Case |
|-------|---------|----------|
| Gemini 1.5 Pro | Ultra-long context | Long document processing |
| Gemini 1.5 Flash | Fast response | High-frequency calls |

## Core Features

### 1. Unified API

```
One integration, switch models:

// Use OpenAI
{
  "model": "gpt-4",
  "messages": [...]
}

// Switch to Claude
{
  "model": "claude-3-opus",
  "messages": [...]
}

// Then switch to Gemini
{
  "model": "gemini-1.5-pro",
  "messages": [...]
}

// Same code, just change model name
```

### 2. Unified Billing

```
Traditional method:
- OpenAI: USD settlement
- Anthropic: USD settlement
- Google: USD settlement
- Exchange rate loss
- Scattered bills

PulsePay AI Gateway:
- USDT settlement
- BNB settlement
- One bill
- Pay-per-use
```

### 3. Usage Statistics

```
Real-time monitoring:
- Daily/weekly/monthly usage
- Model consumption ratio
- Cost trend analysis
- Budget alerts

Easy management:
- Team usage
- Project cost analysis
- Optimization suggestions
```

## Pricing Model

### Token-based Billing

```
Billing method:
Token count × Unit price = Fee

Example (GPT-4-Turbo):
- Input: $0.01 / 1K tokens
- Output: $0.03 / 1K tokens

Calculation:
- Input 1000 tokens = $0.01
- Output 500 tokens = $0.015
- Total fee = $0.025
```

### Model Price Comparison

| Model | Input Price | Output Price | Feature |
|-------|------------|--------------|---------|
| GPT-4o | $0.005 | $0.015 | Best value |
| GPT-3.5 | $0.0005 | $0.0015 | Cheap |
| Claude 3.5 Sonnet | $0.003 | $0.015 | Balanced |
| Claude 3 Haiku | $0.00025 | $0.00125 | Cheapest |
| Gemini 1.5 Flash | $0.00035 | $0.00035 | Long text cheap |

## API Usage Guide

### Registration and Setup

```
1. Visit ai.pulsepay.fun
2. Register account
3. Complete KYC (if needed)
4. Recharge USDT/BNB
5. Get API Key
```

### API Key Management

```
Get API Key:
1. Login to console
2. Go to API Keys page
3. Click create
4. Set permissions
5. Save Key

API Key format:
ppa_live_xxxxxxxxxxxxxxxxxxxx
```

### Call Examples

#### cURL

```bash
curl https://api.pulsepay.fun/v1/chat/completions \
  -H "X-API-TOKEN: ppa_live_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

#### Python

```python
import requests

response = requests.post(
    "https://api.pulsepay.fun/v1/chat/completions",
    headers={
        "X-API-TOKEN": "ppa_live_your_key_here",
        "Content-Type": "application/json"
    },
    json={
        "model": "gpt-4",
        "messages": [
            {"role": "user", "content": "Hello!"}
        ]
    }
)
print(response.json())
```

## Application Scenarios

### 1. AI Application Development

```
For developers:
- SaaS products integrate AI
- Chatbot development
- Content generation tools

Advantages:
- Unified interface
- Controllable costs
- Easy to scale
```

### 2. Enterprise AI Solutions

```
Enterprise use:
- Customer service automation
- Content moderation
- Data analysis
- Report generation

Advantages:
- Enterprise account management
- Usage analysis
- Budget control
```

### 3. AI Agent

```
Developers build AI Agents:
- Autonomous task execution
- Call multiple tools
- On-chain automation

PulsePay AI Gateway:
- Provides the "power"
- Pay-per-use
- Transparent billing
```

## SDK and Integration

### Official SDKs

```
Python: pulsepay-ai-python
JavaScript: pulsepay-ai-js
Go: pulsepay-ai-go
```

### OpenAI Compatible

```
Compatible with OpenAI API format:

# Just modify base URL
# Other code remains unchanged

OpenAI:
  base_url = "https://api.openai.com/v1"

PulsePay:
  base_url = "https://api.pulsepay.fun/v1"
```

## Common Questions

### Q: What's different from other AI APIs?

A: PulsePay AI Gateway advantages:
- One account, multiple models
- USDT/BNB settlement
- Unified bill management
- Supports developers building AI apps
- Hold AIP to earn dividends

### Q: Any price advantage?

A: PulsePay pricing is synchronized with official pricing. Advantages:
- Unified settlement
- Hold AIP to share platform revenue
- Long-term "using = mining"

::: tip 💡 Start Using
Visit [ai.pulsepay.fun](https://ai.pulsepay.fun) to experience AI Gateway now.
:::

## Next Steps

- [Payment System Details](/en/pulsepay/payment) — Learn USDT/BNB payment
- [Get Started](./get-started) — Complete usage guide
