#!/bin/bash
# Storease Website - One-click deploy script
# Double-click this file or run: bash deploy.sh

cd "$(dirname "$0")"

echo "📦 Staging changes..."
git add app/ components/ public/ package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs tailwind.config.* eslint.config.mjs 2>/dev/null

echo "💬 Committing..."
git commit -m "Update Storease website - $(date '+%Y-%m-%d %H:%M')"

echo "🚀 Pushing to GitHub (Vercel auto-deploys)..."
git push origin main

echo "✅ Done! Site will be live in ~60 seconds at storease-website.vercel.app"
