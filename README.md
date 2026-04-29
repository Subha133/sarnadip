# Swarnadip Dey — Portfolio (React + Vite)

A modern, responsive personal portfolio built with **React 18**, **Vite 5**, and **Tailwind CSS 3**.

---

## 🗂 Folder Structure

```
swarnadip-portfolio-vite/
├── index.html                    ← HTML entry, Google Fonts, SEO meta
├── vite.config.ts                ← Vite config with @ alias
├── tailwind.config.js            ← Custom theme (colours, fonts, animations)
├── postcss.config.js
├── tsconfig.json / tsconfig.node.json
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.jpg           ← ⬅ Your profile photo here
│   │   └── skills/
│   │       ├── photoshop.png     ← ⬅ Software logos here
│   │       ├── illustrator.png
│   │       ├── aftereffects.png
│   │       ├── premierepro.png
│   │       ├── indesign.png
│   │       └── canva.png
│   └── portfolio/
│       ├── durgapuja.jpg         ← ⬅ Project images here
│       ├── cfl.jpg
│       └── video.jpg
└── src/
    ├── main.tsx                  ← React DOM entry
    ├── App.tsx                   ← Root component (assembles all sections)
    ├── index.css                 ← Tailwind directives + global styles
    ├── data/
    │   └── data.json             ← ✅ ALL content lives here
    ├── hooks/
    │   ├── useTypewriter.ts      ← Animated rotating titles
    │   ├── useScrollReveal.ts    ← IntersectionObserver animation hook
    │   └── useActiveSection.ts  ← Tracks scroll position for navbar
    └── components/
        ├── layout/
        │   ├── Navbar.tsx        ← Sticky nav + active section highlight
        │   └── Footer.tsx
        ├── sections/
        │   ├── HeroSection.tsx      ← Typewriter + floating profile card
        │   ├── AboutSection.tsx     ← Stats grid + bio + tags
        │   ├── ServicesSection.tsx  ← 3-column categorised service cards
        │   ├── SkillsSection.tsx    ← Grayscale → colour hover logos
        │   ├── PortfolioSection.tsx ← Auto-playing carousel + thumbnails
        │   └── ContactSection.tsx   ← Dark section with contact CTA
        └── ui/
            ├── ScrollReveal.tsx     ← Wrapper for scroll animations
            ├── SectionHeader.tsx    ← Reusable heading block
            └── SocialIcon.tsx       ← Social icon button
```

---

## 🚀 Getting Started

### 1 — Install dependencies
```bash
npm install
```

### 2 — Add your images
Put them in the `public/` folder (paths match `data.json`):

| File | Purpose |
|---|---|
| `public/images/profile.jpg` | Hero profile photo |
| `public/images/skills/photoshop.png` | Skill logo |
| `public/images/skills/illustrator.png` | Skill logo |
| `public/images/skills/aftereffects.png` | Skill logo |
| `public/images/skills/premierepro.png` | Skill logo |
| `public/images/skills/indesign.png` | Skill logo |
| `public/images/skills/canva.png` | Skill logo |
| `public/portfolio/durgapuja.jpg` | Portfolio project |
| `public/portfolio/cfl.jpg` | Portfolio project |
| `public/portfolio/video.jpg` | Portfolio project |

> **Note:** The site shows elegant styled fallbacks if images are missing — so it works immediately even without images.

### 3 — Edit all content
Open `src/data/data.json` and update:
- Name, bio, contact details
- Social media links
- Skills, services, portfolio projects

### 4 — Start dev server
```bash
npm run dev
```
Open → http://localhost:5173

### 5 — Build for production
```bash
npm run build
npm run preview   # to test the production build locally
```
The output goes to `dist/` — deploy it to Vercel, Netlify, GitHub Pages, etc.

---

## ✨ Features

| Feature | Detail |
|---|---|
| Typewriter animation | Cycles through job titles with realistic typing/deleting |
| Scroll reveal | Fade-up / slide-left / slide-right via IntersectionObserver |
| Active nav highlight | Detects current section on scroll |
| Skill hover | Grayscale → full colour on hover |
| Portfolio carousel | Auto-plays every 4s, dots + arrow controls |
| Responsive | Mobile-first, works on all screen sizes |
| Custom scrollbar | Thin maroon scrollbar |
| Noise grain | Subtle texture overlay for tactile feel |
| Fallbacks | All images show styled fallbacks if not found |

---

## 🎨 Design

- **Display font:** Cormorant Garamond (elegant serif)  
- **Body font:** DM Sans  
- **Mono font:** DM Mono  
- **Accent colour:** Deep maroon `#9B1C1C`  
- **Background:** Warm off-white `#FAF9F7`  

---

Built with ♥ for Swarnadip Dey · Kolkata, India
