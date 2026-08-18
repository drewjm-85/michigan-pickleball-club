# Michigan Pickleball Club

Official website for the Michigan Pickleball Club — a student club at the
University of Michigan since 2021. Club info, tryout info, exec board bios,
results, sponsors, and a contact form.

This is a standalone project, unrelated to any other repository.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Deployed on Vercel. `vercel.json` contains a rewrite so client-side routes
(e.g. `/tryouts`) work on direct load/refresh.

## Contact form

The contact form (`src/pages/Contact.tsx`) posts to Formspree. Before going
live, sign up for a free form at [formspree.io](https://formspree.io) and
replace `FORMSPREE_ENDPOINT` in that file with your own form URL.
