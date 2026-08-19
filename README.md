# Michigan Pickleball Club

Official website for the Michigan Pickleball Club — a student club at the
University of Michigan since 2021. Club info, tryout info, exec board bios,
results, sponsors, and contact info.

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

## Contact

The Contact page (`src/pages/Contact.tsx`) links directly to the club's email
and Instagram — no form or third-party service involved.
