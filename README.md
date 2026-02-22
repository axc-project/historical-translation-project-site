# Historical Translation Project™ — Astro Site

Static Astro website designed for:
- Historical Translation Project™ brand + research library
- 3 supplement products (pre-launch)
- Shopify integration placeholders (turn on checkout later)
- Free deployment on Cloudflare Pages or GitHub Pages

## Quick start (local)
1) Install Node.js (LTS)
2) In this folder:
   - npm install
   - npm run dev
3) Open the URL shown in the terminal.

## Deploy free on Cloudflare Pages
- Build command: npm run build
- Output directory: dist

## Edit products & research items
- src/data/products.json
- src/data/research.json

## Shopify integration (later)
Put Shopify product URLs in src/data/products.json under shopifyProductUrl.

## Email capture
Default “Notify me” uses mailto. Replace in src/components/NotifyForm.astro later.
