# MailCraft AI

> 用自然语言生成邮件客户端兼容的 HTML 代码

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen)](https://mvp-ten-roan.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🎯 问题

邮件 HTML 是 1999 年的技术，但我们还在手工编写：

- ❌ ChatGPT 生成的 HTML 在 Gmail 正常，在 Outlook 里全乱了
- ❌ 手动调试表格布局需要 2 小时+ 
- ❌ 拖拽编辑器太慢，还不能精确控制

## ✅ 解决方案

描述你想要的邮件，AI 生成兼容代码：

```
输入: "黑色星期五促销邮件，红色主题，3个产品卡片，CTA按钮"

输出: 完整的、Outlook/Gmail/Apple Mail 兼容的 HTML 代码
```

**核心特性：**
- 🚀 30 秒生成，无需拖拽
- 📧 自动处理 Outlook 兼容性
- 📱 移动端响应式
- 📋 一键复制 HTML

## 🛠 技术栈

- **Frontend**: Next.js 14 + Tailwind CSS
- **AI Model**: GPT-4o-mini (成本 ~$0.003/次)
- **Deployment**: Vercel

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/yourusername/mailcraft-ai.git
cd mailcraft-ai

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local，添加你的 OpenAI API Key

# 启动开发服务器
npm run dev
```

访问 `http://localhost:3000`

## 📝 使用示例

### 示例 1: 欢迎邮件
```
一个简洁的欢迎邮件，包含：
- 顶部品牌 Logo
- "欢迎加入！"大标题
- 一段个性化欢迎文案
- 蓝色"开始使用"按钮
- 底部社交媒体链接
```

### 示例 2: 促销邮件
```
黑色星期五促销邮件：
- 深色背景，红色强调色
- "限时 50% OFF" 大标题
- 3个产品卡片（图片+名称+价格）
- 醒目的 CTA 按钮
- 倒计时提示
```

## 🧠 Prompt 工程

邮件 HTML 的核心约束：

```
CRITICAL RULES:
1. 使用 <table> 布局，禁止 <div> 结构
2. 所有 CSS 必须内联 (style="...")
3. 禁止 Flexbox、Grid、CSS 变量
4. 图片必须设置 width/height/alt
5. 按钮用 table 包裹确保 Outlook 兼容
6. 最大宽度 600px
7. 包含 Outlook 条件注释
```

## 📊 成本分析

| 功能 | 单次成本 | 月成本 (1000次) |
|------|----------|-----------------|
| HTML 生成 | ~$0.003 | $3 |
| 图片生成 (可选) | $0.002 | $2 |
| **总计** | **~$0.005** | **$5** |

## 🗺 路线图

- [x] MVP 核心功能
- [x] 5 种邮件类型模板
- [ ] 自定义品牌色/Logo
- [ ] 邮件测试发送
- [ ] Mailchimp/HubSpot 导出
- [ ] 多语言支持

## 🤝 贡献

欢迎提交 Issue 和 PR！

## 📄 License

MIT License - 详见 [LICENSE](LICENSE)

---

**Live Demo**: [https://mvp-ten-roan.vercel.app](https://mvp-ten-roan.vercel.app)

Built with ❤️ by a solo developer tired of Outlook email bugs.
