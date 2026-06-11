# Storease Website — Deployment Guide

## Project Structure
This is a **Next.js 16** website with Tailwind CSS, statically generated.
All 13 pages build cleanly with zero errors.

## Pages Built
- `/` — Homepage (Hero, Stats, Value Props, Services Grid, Framework, Testimonials, CTA)
- `/about` — About page (Mission, Why Storease, Values, Framework)
- `/services` — Services overview (all 6 services)
- `/services/virtual-events`
- `/services/linkedin-campaigns`
- `/services/list-building`
- `/services/customer-success-stories`
- `/services/design-content`
- `/services/video-creation`
- `/contact` — Contact form + info

---

## Step 1: Push to GitHub

```bash
cd storease-website

# Initialize (already done if you see a .git folder)
git init
git add .
git commit -m "Initial Storease website"

# Create a GitHub repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/storease-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A — Via Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import the GitHub repo you just pushed
4. Leave all settings as default (Next.js is auto-detected)
5. Click "Deploy"
6. Your site will be live in ~60 seconds

### Option B — Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

---

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Brand Colors Used
- Primary Gold: `#F5A623`
- Dark Gold: `#D48C10`
- Light Gold BG: `#FEF3DC` / `amber-50`
- Navy Dark: `#1C2340`
- White: `#FFFFFF`

## Contact Info (in site)
- Email: info@storease.ca
- Phone: +1 (437)-777-9453
