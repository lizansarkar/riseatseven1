# Rise at Seven

A modern, high-performance marketing agency website built with Next.js 16, React 19, and cutting-edge web technologies.

## Overview

Rise at Seven is a beautiful, interactive website showcasing agency services, featured work, and client engagement. It features smooth animations, responsive design, and optimized performance.

## Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org) with TypeScript
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: GSAP 3.15.0 (GreenSock Animation Platform)
- **Carousel**: Swiper 12.1.4
- **Icons**: Lucide React 1.14.0
- **Linting**: ESLint 9

## Project Structure

```
src/app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── globals.css         # Global styles
├── _sections/          # Page sections
│   ├── 01-hero.tsx
│   ├── 02-agency-behind.tsx
│   ├── 03-discorvary.tsx
│   ├── 04-featured-work.tsx
│   ├── 05-services-section.tsx
│   ├── 06-chasing-consumers-marquee.tsx
│   ├── 07-legacy-making.tsx
│   ├── 08-whats-new-section.tsx
│   ├── 09-ready-to-rise.tsx
│   └── 10.footer.tsx
└── sections/           # Section variants
    └── 03-discorvary.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

Hot module replacement is enabled for instant updates as you edit files.

### Build

```bash
bun run build
```

### Production

```bash
bun start
```

### Linting

```bash
bun lint
```

## Key Features

- **Responsive Design**: Mobile-first approach with full responsive breakpoints
- **High Performance**: Optimized images, code splitting, and static generation
- **Smooth Animations**: GSAP-powered animations with ScrollTrigger for scroll-based effects
- **Modern Stack**: Next.js 16 with the latest React and Tailwind CSS
- **Type Safe**: Full TypeScript support for developer experience
- **Accessible**: Built with accessibility best practices

## Notable Dependencies

- **GSAP**: Professional-grade animation library with ScrollTrigger for interactive scroll animations
- **Swiper**: Touch-enabled carousel/slider component
- **Lucide React**: Beautiful, consistent icon library

## Build Errors Fixed

This project uses Tailwind CSS v4 with modern class naming conventions:
- `aspect-[ratio]` → `aspect-ratio` 
- `bg-gradient-to-*` → `bg-linear-to-*`
- Direct max-width tokens instead of arbitrary values where possible

## Environment

- **Package Manager**: Bun
- **Node Version**: 18+
- **Next.js Version**: 16.2.4 (with Turbopack)