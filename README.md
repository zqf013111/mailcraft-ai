# MailCraft AI

> Generate email client-compatible HTML code using natural language

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen)](https://mvp-ten-roan.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🎯 The Problem

Email HTML is stuck in 1999, yet we're still hand-coding it:

- ❌ ChatGPT-generated HTML works in Gmail but breaks in Outlook
- ❌ Manual table-layout debugging takes 2+ hours
- ❌ Drag-and-drop editors are slow and don't allow precise control

## ✅ The Solution

Describe the email you want, AI generates compatible code:

```
Input: "Black Friday promotional email, red theme, 3 product cards, CTA button"

Output: Complete, Outlook/Gmail/Apple Mail compatible HTML code
```

**Core Features:**
- 🚀 Generate in 30 seconds, no dragging required
- 📧 Automatic Outlook compatibility handling
- 📱 Mobile responsive
- 📋 One-click HTML copy

## 🛠 Tech Stack

- **Frontend**: Next.js 14 + Tailwind CSS
- **AI Model**: GPT-4o-mini (cost ~$0.003 per generation)
- **Deployment**: Vercel

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/zqf013111/mailcraft-ai.git
cd mailcraft-ai

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local and add your OpenAI API Key

# Start development server
npm run dev
```

Visit `http://localhost:3000`

## 📝 Usage Examples

### Example 1: Welcome Email
```
A clean welcome email with:
- Top brand logo
- "Welcome Aboard!" headline
- Personalized welcome message paragraph
- Blue "Get Started" button
- Social media links at the bottom
```

### Example 2: Promotional Email
```
Black Friday promotional email:
- Dark background with red accent color
- "Limited Time 50% OFF" headline
- 3 product cards (image + name + price)
- Prominent CTA button
- Countdown timer reminder
```

## 🧠 Prompt Engineering

Core constraints for email HTML:

```
CRITICAL RULES:
1. Use <table> layout, NO <div> structures
2. All CSS must be inline (style="...")
3. NO Flexbox, Grid, or CSS variables
4. Images must have width/height/alt attributes
5. Buttons wrapped in tables for Outlook compatibility
6. Max width 600px
7. Include Outlook conditional comments
```

## 📊 Cost Analysis

| Feature | Per Generation | Monthly (1000x) |
|---------|----------------|-----------------|
| HTML Generation | ~$0.003 | $3 |
| Image Generation (optional) | $0.002 | $2 |
| **Total** | **~$0.005** | **$5** |

## 🗺 Roadmap

- [x] MVP Core Features
- [x] 5 Email Type Templates
- [ ] Custom Brand Colors/Logo
- [ ] Test Email Sending
- [ ] Mailchimp/HubSpot Export
- [ ] Multi-language Support

## 🤝 Contributing

Issues and PRs welcome!

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

**Live Demo**: [https://mvp-ten-roan.vercel.app](https://mvp-ten-roan.vercel.app)

Built with ❤️ by a solo developer tired of Outlook email bugs.
