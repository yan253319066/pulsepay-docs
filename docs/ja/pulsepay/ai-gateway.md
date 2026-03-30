# AI Gateway詳解

## AI Gatewayとは？

```
AI Gateway = AI 統一入口

課題：
- OpenAI アカウント？
- Anthropic アカウント？
- Google AI アカウント？
- それぞれ個別登録、充值、管理が必要

AI Gateway：
一つのアカウント → 複数のAIモデルにアクセス
統一計費 → USDT/BNBで決済
一つの账单 → 明確明了
```

## サポートされているAIモデル

### OpenAIシリーズ

| モデル | 特徴 | 適用シーン |
|--------|-------|-----------|
| GPT-4o | 最新最強、マルチモーダル | 複雑なタスク |
| GPT-4-Turbo | 快速版GPT-4 | 速度が必要なシーン |
| GPT-3.5-Turbo | 安価で快速 | 単純なタスク |

### Anthropicシリーズ

| モデル | 特徴 | 適用シーン |
|--------|-------|-----------|
| Claude 3.5 Sonnet | コストパフォーマンス | 日常会話 |
| Claude 3 Opus | 最強能力 | 複雑な推論 |
| Claude 3 Haiku | 最速最安価 | 単純なタスク |

### Googleシリーズ

| モデル | 特徴 | 適用シーン |
|--------|-------|-----------|
| Gemini 1.5 Pro | 超长コンテキスト | 长文書の処理 |
| Gemini 1.5 Flash | 快速応答 | 高頻度呼び出し |

## コア機能

### 1. 統一API

```
一回接入，多模型切换：

// OpenAIを使用
{
  "model": "gpt-4",
  "messages": [...]
}

// Claudeに切り替え
{
  "model": "claude-3-opus",
  "messages": [...]
}

// Geminiに切り替え
{
  "model": "gemini-1.5-pro",
  "messages": [...]
}

// 同じコードで、モデル名を変えるだけ
```

### 2. 統一計費

```
従来方式：
- OpenAI：米ドル決済
- Anthropic：米ドル決済
- Google：米ドル決済
- 為替損耗
- 账单が分散

PulsePay AI Gateway：
- USDT 決済
- BNB 決済
- 一つの账单
- 按量計費
```

## 料金モデル

### Token別計費

```
計費方式：
Token数量 × 単価 = 費用

例（GPT-4-Turbo）：
- 入力：$0.01 / 1K tokens
- 出力：$0.03 / 1K tokens

計算：
- 入力1000 tokens = $0.01
- 出力500 tokens = $0.015
- 合計費用 = $0.025
```

::: tip �️ 使い始める
[ai.pulsepay.fun](https://ai.pulsepay.fun) にアクセスしてAI Gatewayを体験！
:::

## 次のステップ

- [クイックスタート](./get-started) — 完全な使用ガイド
- [収益分配](/ja/pulsepay/revenue-share) — 収益分配仕組みを学ぶ
