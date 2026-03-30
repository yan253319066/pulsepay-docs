# AI Gateway 详解

## 什么是 AI Gateway？

```
AI Gateway = AI 统一入口

痛点：
- OpenAI 账号？
- Anthropic 账号？
- Google AI 账号？
- 每个都要单独注册、充值、管理

AI Gateway：
一个账号 → 接入多个 AI 模型
统一计费 → USDT/BNB 支付
一个账单 → 清晰明了
```

## 支持的 AI 模型

### OpenAI 系列

| 模型 | 特点 | 适用场景 |
|------|------|----------|
| GPT-4o | 最新最强，多模态 | 复杂任务 |
| GPT-4-Turbo | 快速版 GPT-4 | 需要速度的场景 |
| GPT-3.5-Turbo | 便宜快速 | 简单任务 |

### Anthropic 系列

| 模型 | 特点 | 适用场景 |
|------|------|----------|
| Claude 3.5 Sonnet | 性价比高 | 日常对话 |
| Claude 3 Opus | 最强能力 | 复杂推理 |
| Claude 3 Haiku | 最快最便宜 | 简单任务 |

### Google 系列

| 模型 | 特点 | 适用场景 |
|------|------|----------|
| Gemini 1.5 Pro | 超长上下文 | 长文档处理 |
| Gemini 1.5 Flash | 快速响应 | 高频调用 |

## 核心功能

### 1. 统一 API

```
一次接入，多模型切换：

// 使用 OpenAI
{
  "model": "gpt-4",
  "messages": [...]
}

// 切换到 Claude
{
  "model": "claude-3-opus",
  "messages": [...]
}

// 再换 Gemini
{
  "model": "gemini-1.5-pro",
  "messages": [...]
}

// 同样的代码，换个模型名就行
```

### 2. 统一计费

```
传统方式：
- OpenAI：美元结算
- Anthropic：美元结算
- Google：美元结算
- 汇率损耗
- 账单分散

PulsePay AI Gateway：
- USDT 结算
- BNB 结算
- 一个账单
- 按量计费
```

### 3. 用量统计

```
实时监控：
- 每日/每周/每月用量
- 各模型消耗占比
- 费用趋势分析
- 预算预警

方便管理：
- 团队使用情况
- 项目成本分析
- 优化建议
```

## 定价模式

### 按 Token 计费

```
计费方式：
Token 数量 × 单价 = 费用

示例（GPT-4-Turbo）：
- 输入：$0.01 / 1K tokens
- 输出：$0.03 / 1K tokens

计算：
- 输入 1000 tokens = $0.01
- 输出 500 tokens = $0.015
- 总费用 = $0.025
```

### 模型价格对比

| 模型 | 输入价格 | 输出价格 | 特点 |
|------|----------|----------|------|
| GPT-4o | $0.005 | $0.015 | 最强性价比 |
| GPT-3.5 | $0.0005 | $0.0015 | 便宜 |
| Claude 3.5 Sonnet | $0.003 | $0.015 | 平衡 |
| Claude 3 Haiku | $0.00025 | $0.00125 | 最便宜 |
| Gemini 1.5 Flash | $0.00035 | $0.00035 | 长文本便宜 |

## API 使用指南

### 注册与设置

```
1. 访问 ai.pulsepay.fun
2. 注册账号
3. 完成 KYC（如需要）
4. 充值 USDT/BNB
5. 获取 API Key
```

### API Key 管理

```
获取 API Key：
1. 登录控制台
2. 进入 API Keys 页面
3. 点击创建
4. 设置权限
5. 保存 Key

API Key 格式：
ppa_live_xxxxxxxxxxxxxxxxxxxx
```

### 调用示例

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

## 应用场景

### 1. AI 应用开发

```
开发者使用：
- SaaS 产品接入 AI
- Chatbot 开发
- 内容生成工具

优势：
- 统一接口
- 成本可控
- 易于扩展
```

### 2. 企业 AI 解决方案

```
企业使用：
- 客服自动化
- 内容审核
- 数据分析
- 报告生成

优势：
- 企业账户管理
- 用量分析
- 预算控制
```

### 3. AI Agent

```
开发者构建 AI Agent：
- 自主执行任务
- 调用多种工具
- 链上自动化

PulsePay AI Gateway：
- 提供"动力"
- 按需付费
- 透明计费
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
# 其他代码不变

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
参考各框架的 OpenAI 集成文档
```

## 常见问题

### Q：和其他 AI API 有什么不同？

A：PulsePay AI Gateway 的优势：
- 一个账号，多个模型
- USDT/BNB 结算
- 统一账单管理
- 支持开发者构建 AI 应用
- 持有 AIP 获得分红

### Q：价格有优势吗？

A：PulsePay 定价与官方同步，优势在于：
- 统一结算
- 持有 AIP 分享平台收入
- 长期看是"使用即收益"

### Q：调用有限制吗？

A：取决于你的账户等级：
- 免费用户：基础限制
- 付费用户：更高限制
- 企业用户：自定义限制

::: tip 💡 开始使用
访问 [ai.pulsepay.fun](https://ai.pulsepay.fun) 立即体验 AI Gateway。
:::

## 下一步

- [支付系统详解](./payment) — 了解 USDT/BNB 支付
- [快速开始](./get-started) — 完整使用指南
