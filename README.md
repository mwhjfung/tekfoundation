# tekFoundation website

Multi-page static site for tekFoundation, built with Next.js (static export).
Five pages: Home, For Charities, For Volunteers, For Corporate Partners, Donate.

## Build & deploy

```bash
pnpm install
pnpm build        # outputs a fully static site to ./out
```

Deploy the `out/` folder to any static host (Netlify, Vercel, GitHub Pages,
Cloudflare Pages). No server required.

To preview locally:

```bash
python3 -m http.server 4173 --directory out
# then open http://localhost:4173
```

## Where things live

| What | Where |
|---|---|
| Pages | `app/page.tsx`, `app/charities/`, `app/volunteers/`, `app/partners/`, `app/donate/` |
| All copy & pricing data | `data/site.ts` — edit tiers, stats, testimonials, FAQs here |
| Design system (colours, type, spacing) | `app/globals.css` (CSS variables at the top) |
| Nav / footer | `components/Nav.tsx`, `components/Footer.tsx` |
| Sign-up form embed | `components/SignupForm.tsx` |
| Donation widget | `components/DonationWidget.tsx` |
| Photos & logos | `public/images/` |
| Volunteer video | `public/videos/bradley-volunteer-story.mp4` |

## Functional embeds — important

**Sign-up / interest form.** The LeadConnector survey from the live site is
embedded unchanged (same survey id, same `form_embed.js` resize script). All
fields, logic and submissions still go through LeadConnector. Field styling is
controlled inside the LeadConnector form builder, not in this codebase — the
site only styles the card around it.

**Donation widget.** The widget UI is native to this site and replicates the
live Squarespace donation block's configuration exactly: $50 / $100 / $500 /
$1,500 suggested amounts, custom amount, one-time and monthly frequencies, the
3% cover-the-fee option, AUD totals, and the full DGR disclaimer. Squarespace's
payment checkout cannot run outside Squarespace, so on "Donate Today" the
widget hands off to the live checkout at `tekfoundation.org.au/donate` with the
chosen options in the URL. **When payments move to a new provider (e.g. Stripe
Payment Links), update `DONATION.checkoutUrl` in `data/site.ts` — nothing else
needs to change.**

## Brand

- Purple: `#9b0899` (the live site's accent, `hsl(301, 90%, 32%)`)
- Warm paper neutral: `#f4f1eb`
- Type: Plus Jakarta Sans (400–800), self-hosted via `next/font`
- Voice: confident, clear, human — see the brand guidelines doc
