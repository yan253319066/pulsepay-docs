# AI Gateway 詳解

## 什麼是 AI Gateway？

```
AI Gateway = AI 統一入口

痛點：
- OpenAI 帳號？
- Anthropic 帳號？
- Google AI 帳號？
- 每個都要單獨註冊、充值、管理

AI Gateway：
一個帳號 → 接入多個 AI 模型
統一計費 → USDT/BNB 支付
一個帳單 → 清晰明瞭
```

## 支持的 AI 模型

### OpenAI 系列

| 模型 | 特點 | 適用場景 |
|------|------|----------|
| GPT-4o | 最新最強，多模態 | 複雜任務 |
| GPT-4-Turbo | 快速版 GPT-4 | 需要速度的場景 |
| GPT-3.5-Turbo | 便宜快速 | 簡單任務 |

### Anthropic 系列

| 模型 | 特點 | 適用場景 |
|------|------|----------|
| Claude 3.5 Sonnet性價比高 | 日常對話 |
| Claude 3 Opus | 最強能力 | 複雜推理 |
| Claude 3 Haiku | 最快最便宜 | 簡單任務 |

### Google 系列

| 模型 | 特點 | 適用場景 |
|------|------|----------|
| Gemini 1.5 Pro | 超長上下文 | 長文檔處理 |
| Gemini 1.5 Flash | 快速響應 | 高頻調用 |

## 核心功能

### 1. 統一 API

```
一次接入，多模型切換：

// 使用 OpenAI
{
  "model": "gpt-4",
  "messages": [...]
}

// 切換到 Claude
{
  "model": "claude-3-opus",
  "messages": [...]
}

// 再換 Gemini
{
  "model": "gemini-1.5-pro",
  "messages": [...]
}

// 同樣的代碼，換個模型名就行
```

### 2. 統一計費

```
傳統方式：
- OpenAI：美元結算
- Anthropic：美元結算
- Google：美元結算
- 匯率損耗
- 帳單分散

PulsePay AI Gateway：
- USDT 結算
- BNB 結算
- 一個帳單
- 按量計費
```

### 3. 用量統計

```
實時監控：
- 每日/每週/每月用量
- 各模型消耗佔比
- 費用趨勢分析
- 預算預警

方便管理：
- 團隊使用情況
- 項目成本分析
- 優化建議
```

## 定價模式

### 按 Token 計費

```
計費方式：
Token 數量 × 單價 = 費用

示例（GPT-4-Turbo）：
- 輸入：$0.01 / 1K tokens
- 輸出：$0.03 / 1K tokens

計算：
- 輸入 1000 tokens = $0.01
- 輸出 500 tokens = $0.015
- 總費用 = $0.025
```

### 模型價格對比

| 模型 | 輸入價格 | 輸出價格 | 特點 |
|------|----------|----------|------|
| GPT-4o | $0.005 | $0.015 | 最強性價比 |
| GPT-3.5 | $0.0005 | $0.0015 | 便宜 |
| Claude 3.5 Sonnet | $0.003 | $0.015 | 平衡 |
| Claude 3 Haiku | $0.00025 | $0.00125 | 最便宜 |
| Gemini 1.5 Flash | $0.00035 | $0.00035 | 長文本便宜 |

## API 使用指南

### 註冊與設置

```
1. 訪問 ai.pulsepay.fun
2. 註冊帳號
3. 完成 KYC（如需要）
4. 充值 USDT/BNB
5. 獲取 API Key
```

### API Key 管理

```
獲取 API Key：
1. 登錄控制台
2. 進入 API Keys 頁面
3. 點擊創建
4. 設定權限
5. 保存 Key

API Key 格式：
ppa_live_xxxxxxxxxxxxxxxxxxxx
```

### 調用示例

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

#### JavaScript

```javascript
const response = await fetch(
  "https://api.pulsepay.fun/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "X-API-TOKEN": "ppa_live_your_key_here",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "user", content: "Hello!" }
      ]
    })
  }
);
const data = await response.json();
```

## 應用場景

### 1. AI 應用開發

```
開發者使用：
- SaaS 產品接入 AI
- Chatbot 開發
- 內容生成工具

優勢：
- 統一接口
- 成本可控
- 易於擴展
```

### 2. 企業 AI 解決方案

```
企業使用：
- 客服自動化
- 內容審核
- 數據分析
- 報告生成

優勢：
- 企業帳戶管理
- 用量分析
- 預算控制
```

### 3. AI Agent

```
開發者構建 AI Agent：
- 自主執行任務
- 調用多種工具
- 鏈上自動化

PulsePay AI Gateway：
- 提供"動力"
- 按需付費
- 透明計費
```

## SDK 和集成

### 官方 SDK

```
Python：pulsepay-ai-python
JavaScript：pulsepay-ai-js
Go：pulsepay-ai-go
```

### OpenAI 兼容

```
兼容 OpenAI API 格式：

# 只需修改 base URL
# 其他代碼不變

OpenAI:
  base_url = "https://api.openai.com/v1"

PulsePay:
  base_url = "https://api.pulsepay.fun/v1"
```

### 第三方集成

```
已支持：
- LangChain
- LlamaIndex
- AutoGen
- CrewAI

使用方式：
參考各框架的 OpenAI 集成文檔
```

## 常見問題

### Q：和其他 AI API 有什麼不同？

A：PulsePay AI Gateway 的優勢：
- 一個帳號，多個模型
- USDT/BNB 結算
- 統一帳單管理
- 支持開發者構建 AI 應用
- 持有 AIP 獲得分紅

### Q：價格有優勢嗎？

A：PulsePay 定價與官方同步，優勢在於：
- 統一結算
- 持有 AIP 分享平台收入
- 長期看是"使用即挖礦"

### Q：調用有限制嗎？

A：取決於你的帳戶等級：
- 免費用戶：基礎限制
- 付費用戶：更高限制
- 企業用戶：自定義限制

::: tip 💡 開始使用
訪問 [ai.pulsepay.fun](https://ai.pulsepay.fun) 立即體驗 AI Gateway。
:::

## 下一步

- [支付系統詳解](./payment) — 了解 USDT/BNB 支付
- [快速開始](./get-started) — 完整使用指南
