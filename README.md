# PulsePay Docs

PulsePay 官方文档站点，基于 [VitePress](https://vitepress.dev/) 构建。

## 简介

AI Web3 科普知识库，从入门到精通。PulsePay 是首个将 AI 使用行为转化为链上可分配收益的基础设施协议。

## 快速开始

### 安装依赖

```bash
cd pulsepay-docs
npm install
```

### 开发模式

```bash
npm run docs:dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 文档结构

```
docs/
├── .vitepress/           # VitePress 配置
│   └── config.mts        # 站点配置（多语言导航、侧边栏）
├── public/               # 静态资源
│   └── images/           # 图片资源
├── guide/               # 入门指南
├── ai/                  # AI 入门
├── web3/                # Web3 进阶
├── pulsepay/            # PulsePay 产品介绍
├── resources/           # 资源汇总
├── en/                  # 英文版
├── zh-TW/               # 繁体中文版
└── ja/                  # 日文版
```

## 支持的语言

| 语言 | 目录 | 地址 |
|------|------|------|
| 简体中文 | `/` | 默认 |
| English | `/en/` | - |
| 繁體中文 | `/zh-TW/` | - |
| 日本語 | `/ja/` | - |

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态文档生成器
- Vue 3 - 组件化开发

## 相关链接

- [PulsePay 官网](https://pulsepay.fun)
- [AI Gateway](https://ai.pulsepay.fun)
- [收益分成](https://stake.pulsepay.fun)
- [Telegram 社区](https://t.me/OS_Blockchain)

## License

Copyright © 2026 PulsePay. All rights reserved.
