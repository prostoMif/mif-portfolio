# mif.dev — Portfolio

Personal portfolio of a fullstack developer built with **Next.js 16 + TypeScript + Tailwind CSS**.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Fonts:** Geist (local, no Google Fonts requests)
- **i18n:** Russian / English via `src/lib/content.ts`
- **Contact form:** sends messages to Telegram bot via `/api/contact`
- **Deploy:** Vercel

## Project structure

```
src/
├── app/
│   ├── [locale]/          # ru / en routes
│   │   ├── page.tsx       # Home — Hero, Skills, Projects
│   │   ├── projects/      # Projects list + case detail pages
│   │   ├── services/      # Services page
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page with Telegram CTA + form
│   ├── api/
│   │   └── contact/       # POST → Telegram bot
│   └── layout.tsx         # Root layout, OG meta, fonts
├── components/
│   ├── project-card.tsx   # Project card (tags, live/github links)
│   ├── tech-badge.tsx     # Skill badge with brand icon
│   ├── contact-form.tsx   # Contact form (client component)
│   └── site-shell.tsx     # Nav + footer shell
└── lib/
    └── content.ts         # All text content, projects data, config
```

## Running locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Environment variables

Create `.env.local` (see `.env.example`):

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

Without these the contact form returns an error — everything else works fine.

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in Project Settings → Environment Variables
4. Deploy — done

## Customising content

All site text, projects and config live in one file: **`src/lib/content.ts`**

- `SITE_URL` — your production domain (used for OG tags)
- `contactTelegram` — Telegram username and link
- `CONTACT_FORM_ENABLED` — toggle the contact form
- `skills` — tech badge list
- `projects` — project cards (title, description, tags, liveLink, githubLink)
- `t` — all UI strings in Russian and English

## License

MIT
