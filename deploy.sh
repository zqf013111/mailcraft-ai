#!/bin/bash
# MailCraft AI 部署脚本

echo "🚀 开始部署 MailCraft AI..."

# 检查vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ vercel CLI 未安装，正在安装..."
    npm i -g vercel
fi

# 部署到生产环境
echo "📦 部署到 Vercel..."
vercel --prod --yes

echo "✅ 部署完成!"
echo "🔗 访问地址: https://mailcraft-ai.vercel.app"
