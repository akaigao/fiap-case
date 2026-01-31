# FIAP Postech Clone

A project built with Next.js 16 and SCSS. Features a fluid viewport scaling system that makes everything scale smoothly with screen size.

## Quick Start

```bash
yarn install
yarn dev
```

Open http://localhost:3000

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Run production build
- `yarn lint` - Run ESLint

## Tech Stack

- Next.js 16
- TypeScript
- SCSS Modules
- Montserrat font

## CSS Architecture

Uses a fluid scaling system where `1rem = 10px` at reference viewports (1920px desktop, 1024px tablet, 414px mobile). All rem values scale proportionally with viewport width.

Converting px to rem: divide by 10. So 24px becomes 2.4rem.
