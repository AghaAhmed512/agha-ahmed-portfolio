# Agha Muhammad Ahmed Mehmood — Portfolio

Personal portfolio for **Software Automation Engineer** — built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |

## Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo at [vercel.com](https://vercel.com).
3. Deploy — no extra env vars required.

## Customize content

Edit `src/data/site.ts` for name, experience, projects, skills, and links.

Replace `public/resume.pdf` when you update your CV.

## Structure

```
src/
  app/          # Layout, global styles, page
  components/   # UI sections
  data/         # Site content (single source of truth)
public/
  resume.pdf    # Downloadable CV
```
