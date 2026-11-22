# Pragati Keshari — Developer Portfolio

A responsive, dark minimalist portfolio built with React, Vite and Tailwind CSS v4 (via the Vite plugin). The visual styling is custom CSS, with Lucide icons and subtle motion.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalise before publishing

1. In `src/App.jsx`, replace the GitHub and LinkedIn placeholder URLs with your real profile URLs.
2. Replace `your.email@example.com` with your contact email.
3. Add your PDF resume at `public/resume.pdf` (create the `public` folder if needed).
4. Update project descriptions, technologies, and links so they describe only features you have actually implemented and can explain.
5. Review education, expected graduation year, and skill list for accuracy.
6. Add project screenshots if available.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel should detect Vite automatically.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy.

## Project structure

```text
pragati-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```
