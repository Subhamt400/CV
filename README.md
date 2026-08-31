# Subham Kumar — Developer Portfolio

A modern, high-tech, responsive developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Designed for showcasing full-stack web applications, PHP/MySQL systems, embedded IoT solutions, and AI integrations.

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 16.3.3 (App Router)
- **UI Library:** React 19.2.8 & React DOM 19.2.8
- **Styling:** Tailwind CSS 3.4 & Custom Cyber-Violet CSS Variables
- **Animations:** Framer Motion 12.43
- **Icons:** Lucide React & React Icons
- **Analytics:** Vercel Speed Insights

---

## ✨ Features

- 🎨 **Cyber Tech Aesthetic:** Modern dark-theme-first design system with subtle ambient gradients, cyber grid background patterns, and glassmorphic cards.
- 🌓 **Theme Toggle:** Theme switcher supporting persistent Dark and Light mode preferences.
- ⚡ **Interactive Tech Ecosystem:** Category-filtered tech stack grid and infinite horizontal marquee with edge gradient masks.
- 📂 **Filtered Project Showcase:** Category filter tabs (*All, Professional, AI & Web, Full-Stack, IoT & Embedded*) with fallback terminal graphic previews for projects without static screenshots.
- 📋 **Interactive Contact Section:** One-click email copy button (`tiwarisubham400off@gmail.com`) with instant tooltip feedback, direct email trigger, and social profile links.
- 🎓 **About & Highlights Section:** Overview of B.Tech background, backend architecture, frontend engineering, and IoT microcontrollers.
- 🔒 **Security Hardened:** Fully updated dependencies with 0 audit vulnerabilities, patched against React 19 RSC CVEs.

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.jsx      # App shell with Navbar, Footer, and Speed Insights
│   └── page.jsx        # Main portfolio homepage landing page
├── components/
│   ├── Hero.jsx            # Hero banner with status indicator & CTA buttons
│   ├── AboutSection.jsx    # Engineering background & core highlights
│   ├── TechStack.jsx       # Category-filtered marquee & skills grid
│   ├── Projects.jsx        # Project grid & filter buttons
│   ├── ProjectCard.jsx     # Project card with code fallback graphics
│   ├── ContactSection.jsx  # Interactive email copy & social links
│   ├── Navbar.jsx          # Header with logo, navigation links, and theme toggle
│   ├── Footer.jsx          # Footer with copyright and quick links
│   ├── ThemeToggle.jsx     # Theme mode switch
│   └── ScrollToTop.jsx     # Floating scroll-to-top button
├── data/
│   └── projects.js     # Centralized project records and metadata
├── public/
│   ├── assets/CV.pdf   # Resume download file
│   └── images/         # Project screenshots and portfolio assets
└── styles/
    └── globals.css     # Global theme variables, gradients, and custom utility classes
```

---

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start

```bash
npm run build
npm run start
```

---

## 🛠️ Customization Guide

### Updating Projects
All project data is managed locally in [`data/projects.js`](data/projects.js). To update or add projects, edit the export array:

```javascript
{
  id: 2,
  title: "AI Travel Planner",
  category: "AI & Full-Stack",
  description: "An intelligent travel planning application...",
  techStack: ["React", "Next.js", "Tailwind CSS", "Gemini API"],
  liveLink: "https://your-live-url.com",
  repoLink: "https://github.com/Subhamt400/your-repo",
  image: "/images/your-screenshot.png"
}
```

### Updating Resume
Replace [`public/assets/CV.pdf`](public/assets/CV.pdf) with your latest PDF resume.

---

## 📜 License

This repository is maintained by [Subham Kumar](https://github.com/subhamt400).
