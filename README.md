# Vlad Polishchuk

Personal website and independent portfolio. Built with Next.js App Router, TypeScript, and CSS, with local fonts and project photography.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` to check a production build.

## Configure for Vercel

Import the repository as a Next.js project. The default Vercel build settings work for this project.

Copy `.env.example` to `.env.local` for local development. Set the equivalent variables in Vercel for production.

- `SITE_URL` is the confirmed production origin, for example `https://vladpolishchuk.com`. It enables canonical URLs, the sitemap, and search indexing in production.
- `CONTACT_EMAIL` enables the email link on the Contact page and in the footer. Use a monitored inbox.
- `LINKEDIN_URL` adds a link to the verified personal profile.

The contact page uses a direct email link. Form delivery, a portrait, and guest-interface screenshots are follow-up work. The current project images come from Villa Lim Silent’s public website assets.
