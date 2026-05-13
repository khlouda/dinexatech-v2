# DinexaTech v2 — Project Rules

## Project Context

This is the marketing website for DinexaTech, a web design studio building custom sites, ordering systems, and dashboards for small businesses. The site itself is meant to be a portfolio piece — visitors should feel immediate confidence that we make exceptional work.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-themes · Geist font · Vercel deploy
**Aesthetic:** Apple marketing pages. Pure monochrome (black/white/grays only — no accent color). Massive confident typography. Generous whitespace. Light + dark mode.

## Always Do First

- Read this file fully before making changes
- Read `app/globals.css` to see the design tokens before writing any new styles
- Confirm understanding of the task before writing code on changes that touch more than one file

## Design System — Use These Tokens Only

Light mode:
- background `#FFFFFF` · surface `#FBFBFD` · text-primary `#1D1D1F` · text-secondary `#515154` · text-muted `#86868B` · border `rgba(0,0,0,0.08)`

Dark mode:
- background `#000000` · surface `#1D1D1F` · text-primary `#F5F5F7` · text-secondary `#A1A1A6` · text-muted `#6E6E73` · border `rgba(255,255,255,0.08)`

Type scale: display-xl (84/0.98/-0.05em/600), display-lg (64/1.0/-0.045em/600), display-md (48/1.05/-0.04em/600), body-lg (20/1.4/-0.015em/400), body (16/1.5/-0.01em/400), body-sm (14/1.5/-0.005em/400), caption (12/1.4/0/500).

All display sizes scale down responsively on mobile via `clamp()`.

## Anti-Generic Guardrails — Strict

These are the things every AI-generated agency site does. We don't.

- **No accent colors** (no cyan, blue, neon, purple). Pure monochrome only until explicitly told otherwise.
- **No glow effects, no neon, no `box-shadow` with colored tints**
- **No gradient backgrounds in section backgrounds.** Subtle gradients inside specific UI elements (like a mockup screen) are fine.
- **No grid backgrounds, no dot patterns, no particle fields, no Three.js for ambient decoration**
- **No pill-shaped badges at the top of the hero** ("● Now accepting clients" style — banned)
- **No mono-font "telemetry strips"** ("● 5–7 DAY DELIVERY · NEXT.JS · STRIPE" — banned)
- **No italic serif accent word inside the headline** ("Built like *cathedrals*" — banned)
- **No emojis as section icons** — ever. Use Lucide icons (lucide-react) if iconography is needed, or none at all.
- **No stock photos.** No Unsplash. We use real screenshots of our own demo work, custom illustrations, or empty space.
- **No "Built to Impress. Designed to Convert." stacked two-line headers** for sections.
- **No default Tailwind palette colors** (`text-blue-500`, `bg-indigo-600`, etc.). Use CSS variables from the tokens above only.
- **No `transition-all`.** Animate only `transform`, `opacity`, and `color`. Use specific transition properties.

## Typography Rules

- Pure black/white is forbidden — always use `#1D1D1F` (dark) and `#F5F5F7` (light off-white)
- Display sizes: always pair with tight letter-spacing (the negative em values in tokens)
- Body text: line-height 1.5 minimum
- Never use font-weight 700+ for body text. 400 body, 500 emphasis, 600 max for display.
- Sentence case in headings. Never Title Case. Never ALL CAPS except for `<caption>`-sized meta labels (under 12px).
- Geist Sans for everything. No serif accents in headlines. (We may add serif in client demo mockups, but never in DinexaTech's own copy.)

## Interactive States — Required

Every clickable element MUST have:
- Default state
- `hover:` state (subtle — change opacity, underline, or background by max 4% lightness)
- `focus-visible:` state with accessible outline (using `outline-offset-2` and a visible ring in border color)
- `active:` state (scale to 0.98 or opacity drop)

Underlined text links: `underline-offset-4 decoration-1` always.

## Layering / Depth

- Base layer: background
- Surface layer: cards, mockup frames (slight border, no shadow on light; subtle shadow on dark)
- Floating layer: modals, the floating hero mockup (multi-layer shadow: one soft+far for floor shadow, one tight+close for grounding)

Never put everything on the same z-plane. The floating hero mockup is the only element allowed to have a dramatic shadow.

## Animation Philosophy

- Idle/ambient animation: NONE. Nothing should be moving on the page unless the user is interacting.
- Scroll-driven animation: yes — using Framer Motion's `useScroll` + `useTransform`. The hero mockup tilts/straightens based on scroll position.
- Hover micro-interactions: subtle, fast (150–250ms), spring or `ease-out`
- Page transitions: none yet
- Never use `transition-all` or auto-rotating carousels

## Folder Structure

```
app/                  Next.js App Router pages and layouts
components/
  layout/             Nav, Footer, ThemeToggle
  sections/           Hero, Manifesto, Lab, Process, Contact (one file per section)
  ui/                 Reusable primitives (Button, Link, etc.)
  mockups/            The floating client-site mockups shown on the homepage
lib/                  Utility functions, including `cn()` for class merging
public/
  illustrations/      Custom SVGs (no stock images, no emojis)
```

One section = one file in `components/sections/`. Don't inline section markup into `app/page.tsx`.

## Mockup Quality Bar

The floating mockups (Layaly, Batten Bay, future demos) are the most important visual element on the site. They must look like *real, designed* client sites, not Bootstrap defaults. Each mockup gets:
- Its own typography (often serif, since restaurants/bakeries often want serif identities)
- Its own warm color palette (cream, sienna, terracotta for restaurants, etc.)
- A small detail that proves craft (a numbered tag, a custom logotype, an asymmetric layout)
- A realistic-looking browser chrome around it

If a mockup looks generic, it fails the brand. Redo it.

## Workflow

- Run `npm run dev` in one terminal, keep it running
- Make changes, save, verify in browser at localhost:3000
- Before declaring a task done: confirm it works in both light AND dark mode, and at mobile (375px), tablet (768px), and desktop (1440px) widths
- Before pushing: run `npm run build` and confirm zero errors and zero warnings

## Hard Rules

- Do not add sections, features, or copy that I didn't ask for
- Do not "improve" the design unless I ask — restraint is the brand
- Do not add a color, gradient, or effect "just to make it pop"
- Do not install new dependencies without telling me what they are and why
- Do not commit secrets — env vars only in `.env.local`, never `.env`
- Do not modify files in `node_modules`, `.next`, or `.vercel`
