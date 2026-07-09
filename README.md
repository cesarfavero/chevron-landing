# Chevron Landing Page

Landing page premium do **Chevron** — o app dos motoclubes brasileiros.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4**
- **Framer Motion** — scroll reveals e micro-interações
- **Three.js + React Three Fiber** — logo 3D animado no hero
- **Bebas Neue + Poppins** — tipografia display rock / body premium

## Design

- Paleta Chevron: primary `#00FF88`, bg `#0A0A0A`, surface `#141414`
- Estética Harley / rock / motoclube: chrome text, grain, glass dark, road stripes
- Vídeo cinematográfico no hero + mockups e textures gerados

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Estrutura

```
src/
  app/           # layout, page, globals
  components/    # Hero, Features, Experience, Download, 3D canvas...
  lib/           # constants (features, store links)
public/
  images/        # logo, hero, mockups
  videos/        # hero ambient video
```

## Store links

Atualize as URLs reais em `src/lib/constants.ts` (`STORE_LINKS`) quando as listagens estiverem no ar.

## Deploy

Qualquer host com Node (Vercel recomendado):

```bash
npx vercel
```
