# MERN Developer Portfolio (React + Tailwind CSS)

A single-page portfolio built with React, Vite and Tailwind CSS v4,
split into one component per section.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to the `dist/` folder — deploy that
folder to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
├── App.jsx                 – composes all sections + theme state
├── data.js                 – EDIT ME: your name, links, projects, etc.
├── theme.js                – dark/light Tailwind class tokens
├── index.css                – Tailwind import + fonts
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Projects.jsx
    ├── Testimonials.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── SectionHead.jsx      – shared "eyebrow + heading" block
    ├── GlowBackground.jsx   – decorative gradient blobs
    └── Icons.jsx            – all inline SVG icons + placeholder Avatar
```

## Where to edit your info

Everything content-related lives in **`src/data.js`**:
`NAME`, `INITIALS`, `TAGLINE`, `ROLES`, `EMAIL`, `SOCIALS`, `TECH`,
`SERVICES`, `PROJECTS`, `TESTIMONIALS`.

`Avatar()` in `src/components/Icons.jsx` is a placeholder illustration —
replace its usage in `Hero.jsx` with a real `<img src="/your-photo.jpg" />`
once you have a photo (put the image file in the `public/` folder).

## Styling

This project uses Tailwind CSS v4 via `@tailwindcss/vite` — no
`tailwind.config.js` or PostCSS setup needed. Custom fonts and the
blinking-cursor animation are defined in `src/index.css`.
