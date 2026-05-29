# TekFoundation Landing Page — Design Spec

**Date:** 2026-05-30  
**Stack:** Next.js App Router + Tailwind CSS  
**Scope:** Single scrolling landing page  
**Design direction:** Clean & Professional, inspired by tekfoundation.org.au

---

## Brand Tokens

| Token | Value |
|---|---|
| Brand purple | `#D355D0` |
| Brand tint (bg) | `#fce8fc` |
| Brand border | `#f0c8f0` (tint darkened) |
| Dark text | `#0f172a` |
| Muted text | `#64748b` |
| Subtle text | `#94a3b8` |
| Page bg | `#ffffff` |
| Alternate section bg | `#fce8fc` |
| Footer bg | `#0f172a` |

Tailwind config extends the theme with a `brand` color key mapped to `#D355D0` to enable `text-brand`, `bg-brand`, `border-brand` utilities.

**Font:** Inter (Google Fonts) — used for all text. Loaded via `next/font/google` in `layout.tsx`.

**Logo:** Fetched from Squarespace CDN at build time and stored in `public/logo.png`. The mark is a magenta circle with a `tf` monogram; the wordmark is bold black with a magenta period.

---

## Architecture

### File Structure

```
app/
  layout.tsx          — root layout: font, metadata, viewport
  page.tsx            — assembles all 9 section components in order
components/
  Navbar.tsx
  Hero.tsx
  Stats.tsx
  CharityPartners.tsx
  VolunteerProjects.tsx
  GetInTouch.tsx
  Testimonials.tsx
  Supporters.tsx
  Footer.tsx
data/
  content.ts          — all static text content exported as typed constants
public/
  logo.png            — TekFoundation logo
tailwind.config.ts    — brand color token
```

### Rendering Strategy

Fully static — no `use client`, no API routes, no database. Next.js renders all pages at build time. No dynamic data is needed.

---

## Sections (top to bottom)

### 1. Navbar
- Sticky at top, white background, bottom border `#e2e8f0`
- Left: logo mark + `tekFoundation.` wordmark (period in brand purple)
- Right: "About Us" text link, LinkedIn icon, Instagram icon, Donate pill button (brand purple)
- "About Us" links to `#about` anchor (the Get in Touch section) — no separate page
- No hamburger / mobile drawer needed for MVP — links collapse gracefully

### 2. Hero
- Background: soft gradient from `#fce8fc` (top-left) to `#f8fafc` (bottom-right)
- Eyebrow label: "Since 2023" in brand purple, uppercase, letter-spaced
- Headline: "Connecting charities across Australia with skilled volunteers to amplify impact." — bold, large, dark
- Subtext: mission tagline in muted text, max-width constrained
- Two CTA buttons: "Get Involved" (filled brand purple, pill) + "Our Work" (outlined brand purple, pill)

### 3. Stats Bar
- White background, 3 columns centered
- Each column: large bold number in brand purple + small uppercase label
- Values: 55+ Charities Matched · 1,800+ Hours Donated · $300k+ Value Delivered

### 4. Charity Partners
- Brand tint background (`#fce8fc`)
- Section label: "Charity Partners" — small, uppercase, muted
- 8 logo images in a responsive flex row (logos sourced from original site or placeholders)

### 5. Volunteer Projects
- White background
- Heading: "Common Volunteer Projects"
- Body: short descriptor sentence
- Pill tags in brand tint with brand purple text: Web Development, Digital Marketing, Financial Reporting, Data & Reporting, CRM Setup, + any others from the original site

### 6. Get in Touch
- Full-width gradient section: `#D355D0` → `#a820a5`
- White headline and body text
- "Something new is coming" message from original site preserved
- CTA button: white background, brand purple text, pill shape

### 7. Testimonials
- White background
- Heading: "What Our Partners Say"
- 3 cards in a responsive row (stack on mobile)
- Each card: brand tint background, brand purple top border, italic quote, bold name, muted role/org
- Quotes from: Yvonne Balakian (Skillz4me), Maddie Catlin (Future2 Foundation), James Happell (Infoxchange)

### 8. Partners & Supporters
- Brand tint background
- Section label: "Partners & Supporters"
- 6 logo images in a responsive flex row

### 9. Footer
- Dark background `#0f172a`
- Top row: logo + wordmark (left), LinkedIn + Instagram links (right)
- Divider
- Indigenous acknowledgement of Country statement
- Copyright line: © tekFoundation 2026 · ABN 21679029826 · ACNC Registered Charity

---

## Responsive Behaviour

- Mobile-first Tailwind breakpoints
- Navbar: social icons + About link hide on small screens; Donate button always visible
- Stats: 3-col on all sizes (numbers are compact)
- Testimonials: single column on mobile (`flex-col`), 3-col on `md:`
- Logo strips: `flex-wrap` so they reflow naturally

---

## Content Source

All text content lives in `data/content.ts` as exported constants. Components import from there — no content is hardcoded in JSX. This makes future copy updates a one-file change.

---

## Out of Scope

- Shopping cart (no e-commerce)
- Donate payment flow (button links out to existing donation page)
- CMS / dynamic content
- About Us page or any secondary pages
- Animations / scroll effects (can be added later)
