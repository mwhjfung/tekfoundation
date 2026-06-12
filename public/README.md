# public/ — asset guide for website editors

All static assets served by the Next.js site live here.
Drive source: https://drive.google.com/drive/folders/1HN_rNmfupW60ImacLGRLCjp6qHRcQ9g9

## Structure

```
public/
  images/
    logos/
      brand/          tekFoundation logo variants (Asset 16–23 from Drive)
      partners/       Pro bono & community partner logos
      charities/      Logos of charities we've supported
      acnc/           ACNC Registered Charity badge
    team/             Exec team & board headshots
    testimonials/     Headshots used in testimonial section
    hero/             Event & community photography (hero, How It Works, etc.)
  fonts/              GT Walsheim (Bold, Medium, Regular) + MyriadPro Regular
  docs/               Impact report PDF and other downloadable documents
```

## Downloading missing assets

Run `node scripts/download-assets.js` with a valid Google access token:

```bash
export GOOGLE_ACCESS_TOKEN=$(gcloud auth print-access-token)
node scripts/download-assets.js
```

Or authenticate via `gcloud auth login` first.

## Naming convention

Files use SEO-friendly kebab-case:
- `tekfoundation-logo-primary.png` not `Asset 23.png`
- `joni-fleischer-head-of-tekfoundation.jpg` not `Copy of jonipicture.jpg`
- `ozharvest-logo.svg` not `Copy of ozharvest-logo.svg`

## Brand colours

- Brand: `#d355d0` (magenta)
- Ink: `#0f0f1a`
- Brand tint: `#fce8fc`

See `app/globals.css` for full CSS variable definitions.

## Fonts

GT Walsheim (Bold/Medium/Regular) — licensed font, files in `fonts/`.
Fallback: Plus Jakarta Sans loaded via `next/font/google` in `app/layout.tsx`.
To activate GT Walsheim: update `--font-sans` in `globals.css` to point to the local font files.
