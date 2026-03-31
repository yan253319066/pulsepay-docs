import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PulsePay Docs",
  description: "AI Web3 科普，从入门到精通。PulsePay 是首个将 AI 使用行为转化为链上可分配收益的基础设施协议。",

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/logo/favicon.ico' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@PulsePay' }]
  ],

  ignoreDeadLinks: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '入门指南', link: '/guide/' },
          { text: 'AI 入门', link: '/ai/' },
          { text: 'Web3 进阶', link: '/web3/' },
          { text: 'PulsePay', link: '/pulsepay/' },
          { text: '资源', link: '/resources/' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '入门指南',
              items: [
                { text: '什么是 Web3？', link: '/guide/' },
                { text: '区块链是什么？', link: '/guide/blockchain' },
                { text: '加密货币入门', link: '/guide/crypto' },
                { text: '如何拥有第一个钱包', link: '/guide/wallet' },
                { text: 'DeFi 是什么？', link: '/guide/defi' },
                { text: '第一次使用 DApp', link: '/guide/first-dapp' }
              ]
            }
          ],
          '/ai/': [
            {
              text: 'AI 入门',
              items: [
                { text: 'AI 是什么？', link: '/ai/' },
                { text: '大语言模型', link: '/ai/llm' },
                { text: 'AI Agent', link: '/ai/agents' },
                { text: 'AIGC 入门', link: '/ai/aigc' },
                { text: 'AI 为什么付费？', link: '/ai/pricing' }
              ]
            }
          ],
          '/web3/': [
            {
              text: 'Web3 进阶',
              items: [
                { text: 'DeFi 深入理解', link: '/web3/defi' },
                { text: '智能合约原理', link: '/web3/smart-contract' },
                { text: 'NFT 完全指南', link: '/web3/nft' },
                { text: 'DAO 组织', link: '/web3/dao' },
                { text: 'Web3 安全', link: '/web3/security' }
              ]
            }
          ],
          '/pulsepay/': [
            {
              text: 'PulsePay',
              items: [
                { text: 'PulsePay 是什么？', link: '/pulsepay/' },
                { text: '工作原理', link: '/pulsepay/how-it-works' },
                { text: 'AI Gateway', link: '/pulsepay/ai-gateway' },
                { text: '支付系统', link: '/pulsepay/payment' },
                { text: '收益分成', link: '/pulsepay/revenue-share' },
                { text: 'AIP 代币经济', link: '/pulsepay/tokenomics' },
                { text: '快速开始', link: '/pulsepay/get-started' },
                { text: '常见问题', link: '/pulsepay/faq' },
                { text: '路线图', link: '/pulsepay/roadmap' }
              ]
            }
          ],
          '/resources/': [
            {
              text: '资源',
              items: [
                { text: '术语表', link: '/resources/glossary' },
                { text: '推荐工具', link: '/resources/tools' },
                { text: '社区与支持', link: '/resources/community' },
                { text: '官方链接', link: '/resources/links' },
                { text: '视频教程', link: '/resources/video' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'AI Basics', link: '/en/ai/' },
          { text: 'Web3 Advanced', link: '/en/web3/' },
          { text: 'PulsePay', link: '/en/pulsepay/' },
          { text: 'Resources', link: '/en/resources/' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'What is Web3?', link: '/en/guide/' },
                { text: 'What is Blockchain?', link: '/en/guide/blockchain' }
              ]
            }
          ],
          '/en/pulsepay/': [
            {
              text: 'PulsePay',
              items: [
                { text: 'What is PulsePay?', link: '/en/pulsepay/' },
                { text: 'Get Started', link: '/en/pulsepay/get-started' }
              ]
            }
          ]
        }
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: {
        nav: [
          { text: '入門指南', link: '/zh-TW/guide/' },
          { text: 'AI 入門', link: '/zh-TW/ai/' },
          { text: 'Web3 進階', link: '/zh-TW/web3/' },
          { text: 'PulsePay', link: '/zh-TW/pulsepay/' },
          { text: '資源', link: '/zh-TW/resources/' }
        ],
        sidebar: {
          '/zh-TW/guide/': [
            {
              text: '入門指南',
              items: [
                { text: '什麼是 Web3？', link: '/zh-TW/guide/' }
              ]
            }
          ],
          '/zh-TW/pulsepay/': [
            {
              text: 'PulsePay',
              items: [
                { text: 'PulsePay 是什麼？', link: '/zh-TW/pulsepay/' },
                { text: '工作原理', link: '/zh-TW/pulsepay/how-it-works' },
                { text: 'AI Gateway', link: '/zh-TW/pulsepay/ai-gateway' },
                { text: '支付系統', link: '/zh-TW/pulsepay/payment' },
                { text: '收益分成', link: '/zh-TW/pulsepay/revenue-share' },
                { text: 'AIP 代幣經濟', link: '/zh-TW/pulsepay/tokenomics' },
                { text: '快速開始', link: '/zh-TW/pulsepay/get-started' },
                { text: '常見問題', link: '/zh-TW/pulsepay/faq' },
                { text: '路線圖', link: '/zh-TW/pulsepay/roadmap' }
              ]
            }
          ],
          '/zh-TW/web3/': [
            {
              text: 'Web3 進階',
              items: [
                { text: 'DeFi 深入理解', link: '/zh-TW/web3/defi' },
                { text: '智能合約原理', link: '/zh-TW/web3/smart-contract' },
                { text: 'NFT 完全指南', link: '/zh-TW/web3/nft' },
                { text: 'DAO 組織', link: '/zh-TW/web3/dao' },
                { text: 'Web3 安全', link: '/zh-TW/web3/security' }
              ]
            }
          ]
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/' },
          { text: 'AI 基本', link: '/ja/ai/' },
          { text: 'Web3 上級', link: '/ja/web3/' },
          { text: 'PulsePay', link: '/ja/pulsepay/' },
          { text: 'リソース', link: '/ja/resources/' }
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'ガイド',
              items: [
                { text: 'Web3とは？', link: '/ja/guide/' }
              ]
            }
          ],
          '/ja/pulsepay/': [
            {
              text: 'PulsePay',
              items: [
                { text: 'PulsePayとは？', link: '/ja/pulsepay/' },
                { text: 'クイックスタート', link: '/ja/pulsepay/get-started' }
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    logo: '/images/logo/logo.png',
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/pulsepay' },
      // { icon: 'twitter', link: 'https://twitter.com/PulsePay' },
      { icon: 'telegram', link: 'https://t.me/OS_Blockchain' }
    ],
    footer: {
      message: 'PulsePay Protocol - AI 使用即收益',
      copyright: 'Copyright © 2026 PulsePay. All rights reserved.'
    },
    search: {
      provider: 'local'
    }
  }
})
