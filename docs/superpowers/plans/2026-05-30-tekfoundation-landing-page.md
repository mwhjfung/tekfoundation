# TekFoundation Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single scrolling landing page for tekFoundation using Next.js App Router and Tailwind CSS, inspired by tekfoundation.org.au with the brand purple `#D355D0`.

**Architecture:** 9 independent section components assembled in `app/page.tsx`. All content lives in `data/content.ts`. No API calls, no dynamic data — fully static, renders at build time.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Jest + React Testing Library

---

## File Map

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — Inter font, metadata, viewport |
| `app/page.tsx` | Assembles all 9 section components |
| `app/globals.css` | Tailwind directives |
| `tailwind.config.ts` | Brand color tokens |
| `jest.config.ts` | Jest + Next.js config |
| `jest.setup.ts` | `@testing-library/jest-dom` import |
| `data/content.ts` | All static text content |
| `components/Navbar.tsx` | Sticky nav: logo, links, donate |
| `components/Hero.tsx` | Headline, tagline, two CTAs |
| `components/Stats.tsx` | Three stat columns |
| `components/CharityPartners.tsx` | Partner logo strip |
| `components/VolunteerProjects.tsx` | Section heading + pill tags |
| `components/GetInTouch.tsx` | Full-width purple gradient CTA |
| `components/Testimonials.tsx` | Three quote cards |
| `components/Supporters.tsx` | Supporters logo strip |
| `components/Footer.tsx` | Dark footer with acknowledgement |
| `public/logo.png` | TekFoundation logo (downloaded at setup) |

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: project root files via `create-next-app`

- [ ] **Step 1: Scaffold into the existing directory**

```bash
cd /Users/mfungy/Documents/RobotStuff/TekFoundation/tekfoundation
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

When prompted about existing files (README.md), choose to keep them.

Expected output ends with: `Success! Created tekfoundation`

- [ ] **Step 2: Verify the scaffold**

```bash
ls app components public
```

Expected: `app/` contains `layout.tsx`, `page.tsx`, `globals.css`. `public/` exists.

- [ ] **Step 3: Remove boilerplate component and page content**

Delete the auto-generated contents of `app/page.tsx` — replace with just:

```tsx
export default function Home() {
  return <main>hello</main>
}
```

Delete `app/globals.css` content except the three Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — should show "hello". Stop with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js + Tailwind project"
```

---

## Task 2: Configure Brand Token + Download Logo

**Files:**
- Modify: `tailwind.config.ts`
- Create: `public/logo.png`

- [ ] **Step 1: Add brand color to Tailwind config**

Replace the contents of `tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D355D0',
        'brand-tint': '#fce8fc',
        'brand-border': '#f0c8f0',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: Download the TekFoundation logo**

```bash
curl -L "https://images.squarespace-cdn.com/content/v1/66fddfcc1337ca4eceea8ed0/7813f842-8be7-4be0-b5d1-8bde821c4c98/blacklogotext.png?format=1500w" -o public/logo.png
```

Expected: `public/logo.png` created, file size > 1KB.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts public/logo.png
git commit -m "feat: add brand color token and logo asset"
```

---

## Task 3: Set Up Jest + React Testing Library

**Files:**
- Create: `jest.config.ts`
- Create: `jest.setup.ts`
- Modify: `package.json` (scripts + devDependencies)

- [ ] **Step 1: Install testing dependencies**

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- [ ] **Step 2: Create `jest.config.ts`**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 3: Create `jest.setup.ts`**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Add test script to `package.json`**

In `package.json`, add to the `"scripts"` section:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 5: Create `__tests__` directory and verify Jest runs**

```bash
mkdir __tests__
touch __tests__/.gitkeep
npm test -- --passWithNoTests
```

Expected: `Test Suites: 0 skipped` (no failures).

- [ ] **Step 6: Commit**

```bash
git add jest.config.ts jest.setup.ts __tests__/.gitkeep package.json package-lock.json
git commit -m "chore: set up Jest and React Testing Library"
```

---

## Task 4: Create Content Data File

**Files:**
- Create: `data/content.ts`

- [ ] **Step 1: Create the data directory and content file**

```bash
mkdir data
```

Create `data/content.ts`:

```ts
export const HERO = {
  eyebrow: 'Since 2023',
  headline:
    'Connecting charities across Australia with skilled volunteers to amplify impact.',
  tagline:
    'We partner with frontline organisations to solve technical challenges, match the right skills, and deliver lasting digital infrastructure.',
  primaryCta: 'Get Involved',
  secondaryCta: 'Our Work',
}

export const STATS = [
  { value: '55+', label: 'Charities Matched' },
  { value: '1,800+', label: 'Hours Donated' },
  { value: '$300k+', label: 'Value Delivered' },
]

export const CHARITY_PARTNERS: { name: string; logo?: string }[] = [
  { name: 'WWHC' },
  { name: 'OzHarvest' },
  { name: 'SECNA' },
  { name: 'Infoxchange' },
  { name: 'Future2' },
  { name: 'Skillz4me' },
  { name: 'Creative Bytes' },
  { name: 'Partner 8' },
]

export const VOLUNTEER_PROJECTS = [
  'Web Development',
  'Digital Marketing',
  'Financial Reporting',
  'Data & Reporting',
  'CRM Setup',
  'Graphic Design',
]

export const GET_IN_TOUCH = {
  id: 'about',
  heading: 'Get in Touch',
  body: 'Something new is coming soon at tekFoundation — a new operating model built around charity memberships, skilled volunteering, and sponsorship-backed support.',
  cta: 'Contact Us',
  href: 'mailto:hello@tekfoundation.org.au',
}

export const TESTIMONIALS = [
  {
    quote:
      'TekFoundation connected us with skilled volunteers who delivered real, lasting impact for our organisation.',
    name: 'Yvonne Balakian',
    role: 'Operations Manager',
    org: 'Skillz4me',
  },
  {
    quote:
      'The team matched us with exactly the right skills at exactly the right time. Incredible support for our mission.',
    name: 'Maddie Catlin',
    role: 'General Manager',
    org: 'Future2 Foundation',
  },
  {
    quote:
      'A genuine force for good in the sector. TekFoundation understands what frontline organisations actually need.',
    name: 'James Happell',
    role: 'Asia Pacific Consultant Lead',
    org: 'Infoxchange',
  },
]

export const SUPPORTERS: { name: string; logo?: string }[] = [
  { name: 'Supporter 1' },
  { name: 'Supporter 2' },
  { name: 'Supporter 3' },
  { name: 'Supporter 4' },
  { name: 'Supporter 5' },
  { name: 'Supporter 6' },
]

export const FOOTER = {
  acknowledgement:
    'We acknowledge the Traditional Custodians of Country throughout Australia and their connections to land, sea, and community. We pay our respects to Elders past, present and emerging.',
  copyright: '© tekFoundation 2026',
  abn: 'ABN 21679029826',
  social: {
    linkedin: 'https://www.linkedin.com/company/tekfoundation',
    instagram: 'https://www.instagram.com/tekfoundation',
  },
}
```

> **Note:** Replace the placeholder testimonial quotes with the real quotes from the original site. Replace `CHARITY_PARTNERS` and `SUPPORTERS` logo paths once assets are available — add `logo: '/partners/name.png'` and place images in `public/partners/`.

- [ ] **Step 2: Commit**

```bash
git add data/content.ts
git commit -m "feat: add static content data file"
```

---

## Task 5: Root Layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/layout.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('RootLayout', () => {
  it('renders children', () => {
    render(
      <RootLayout>
        <div data-testid="child">content</div>
      </RootLayout>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/layout.test.tsx
```

Expected: FAIL — layout doesn't match the import yet.

- [ ] **Step 3: Implement `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tekFoundation — Connecting charities with skilled volunteers',
  description:
    'Since 2023, tekFoundation has partnered with frontline organisations to solve technical challenges and deliver lasting digital infrastructure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/layout.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx __tests__/layout.test.tsx
git commit -m "feat: root layout with Inter font and metadata"
```

---

## Task 6: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`
- Create: `__tests__/Navbar.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/Navbar.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders the logo image', () => {
    render(<Navbar />)
    expect(screen.getByAltText('tekFoundation')).toBeInTheDocument()
  })

  it('renders About Us link pointing to #about', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /about us/i })
    expect(link).toHaveAttribute('href', '#about')
  })

  it('renders Donate button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /donate/i })).toBeInTheDocument()
  })

  it('renders LinkedIn and Instagram links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/Navbar.test.tsx
```

Expected: FAIL — `components/Navbar.tsx` does not exist.

- [ ] **Step 3: Create `components/Navbar.tsx`**

```tsx
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER } from '@/data/content'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="tekFoundation"
            width={180}
            height={45}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="#about"
            className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            About Us
          </Link>

          <Link
            href={FOOTER.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-brand transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73A1.77 1.77 0 1 1 6.5 3.2a1.77 1.77 0 0 1 0 3.53zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z" />
            </svg>
          </Link>

          <Link
            href={FOOTER.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-slate-400 hover:text-brand transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </Link>

          <Link
            href="#"
            className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/Navbar.test.tsx
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx __tests__/Navbar.test.tsx
git commit -m "feat: Navbar component with logo, links, and donate button"
```

---

## Task 7: Hero Component

**Files:**
- Create: `components/Hero.tsx`
- Create: `__tests__/Hero.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/Hero.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { HERO } from '@/data/content'

describe('Hero', () => {
  it('renders the eyebrow label', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.tagline)).toBeInTheDocument()
  })

  it('renders primary and secondary CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: HERO.primaryCta })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.secondaryCta })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/Hero.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/Hero.tsx`**

```tsx
import Link from 'next/link'
import { HERO } from '@/data/content'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-tint via-white to-slate-50 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest text-brand uppercase mb-4">
          {HERO.eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          {HERO.headline}
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10">
          {HERO.tagline}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#about"
            className="bg-brand text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            {HERO.primaryCta}
          </Link>
          <Link
            href="#volunteer"
            className="border-2 border-brand text-brand px-7 py-3 rounded-full font-semibold hover:bg-brand-tint transition-colors"
          >
            {HERO.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/Hero.test.tsx
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx __tests__/Hero.test.tsx
git commit -m "feat: Hero section with headline, tagline, and CTAs"
```

---

## Task 8: Stats Component

**Files:**
- Create: `components/Stats.tsx`
- Create: `__tests__/Stats.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/Stats.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Stats from '@/components/Stats'
import { STATS } from '@/data/content'

describe('Stats', () => {
  it('renders all stat values', () => {
    render(<Stats />)
    STATS.forEach(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument()
    })
  })

  it('renders all stat labels', () => {
    render(<Stats />)
    STATS.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/Stats.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/Stats.tsx`**

```tsx
import { STATS } from '@/data/content'

export default function Stats() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-around gap-8 text-center">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-4xl font-extrabold text-brand">{value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/Stats.test.tsx
```

Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Stats.tsx __tests__/Stats.test.tsx
git commit -m "feat: Stats section with three key metrics"
```

---

## Task 9: CharityPartners Component

**Files:**
- Create: `components/CharityPartners.tsx`
- Create: `__tests__/CharityPartners.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/CharityPartners.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import CharityPartners from '@/components/CharityPartners'
import { CHARITY_PARTNERS } from '@/data/content'

describe('CharityPartners', () => {
  it('renders the section heading', () => {
    render(<CharityPartners />)
    expect(screen.getByText(/charity partners/i)).toBeInTheDocument()
  })

  it('renders a placeholder for each partner', () => {
    render(<CharityPartners />)
    CHARITY_PARTNERS.forEach(({ name }) => {
      expect(screen.getByTitle(name)).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/CharityPartners.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/CharityPartners.tsx`**

```tsx
import { CHARITY_PARTNERS } from '@/data/content'
import Image from 'next/image'

export default function CharityPartners() {
  return (
    <section className="bg-brand-tint border-b border-brand-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Charity Partners
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {CHARITY_PARTNERS.map(({ name, logo }) =>
            logo ? (
              <Image
                key={name}
                src={logo}
                alt={name}
                title={name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <div
                key={name}
                title={name}
                className="h-10 w-28 bg-brand-border rounded flex items-center justify-center text-xs font-semibold text-brand opacity-60"
              >
                {name}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/CharityPartners.test.tsx
```

Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add components/CharityPartners.tsx __tests__/CharityPartners.test.tsx
git commit -m "feat: CharityPartners logo strip section"
```

---

## Task 10: VolunteerProjects Component

**Files:**
- Create: `components/VolunteerProjects.tsx`
- Create: `__tests__/VolunteerProjects.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/VolunteerProjects.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import VolunteerProjects from '@/components/VolunteerProjects'
import { VOLUNTEER_PROJECTS } from '@/data/content'

describe('VolunteerProjects', () => {
  it('renders the section heading', () => {
    render(<VolunteerProjects />)
    expect(screen.getByRole('heading', { name: /common volunteer projects/i })).toBeInTheDocument()
  })

  it('renders a pill tag for each project type', () => {
    render(<VolunteerProjects />)
    VOLUNTEER_PROJECTS.forEach((project) => {
      expect(screen.getByText(project)).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/VolunteerProjects.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/VolunteerProjects.tsx`**

```tsx
import { VOLUNTEER_PROJECTS } from '@/data/content'

export default function VolunteerProjects() {
  return (
    <section id="volunteer" className="bg-white border-b border-slate-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
          Common Volunteer Projects
        </h2>
        <p className="text-slate-500 mb-8">
          Our volunteers tackle real digital challenges across these areas:
        </p>
        <div className="flex flex-wrap gap-3">
          {VOLUNTEER_PROJECTS.map((project) => (
            <span
              key={project}
              className="bg-brand-tint border border-brand-border text-brand font-semibold text-sm px-4 py-2 rounded-full"
            >
              {project}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/VolunteerProjects.test.tsx
```

Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add components/VolunteerProjects.tsx __tests__/VolunteerProjects.test.tsx
git commit -m "feat: VolunteerProjects section with pill tags"
```

---

## Task 11: GetInTouch Component

**Files:**
- Create: `components/GetInTouch.tsx`
- Create: `__tests__/GetInTouch.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/GetInTouch.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import GetInTouch from '@/components/GetInTouch'
import { GET_IN_TOUCH } from '@/data/content'

describe('GetInTouch', () => {
  it('renders the heading', () => {
    render(<GetInTouch />)
    expect(screen.getByRole('heading', { name: GET_IN_TOUCH.heading })).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<GetInTouch />)
    expect(screen.getByText(GET_IN_TOUCH.body)).toBeInTheDocument()
  })

  it('renders the CTA link', () => {
    render(<GetInTouch />)
    expect(screen.getByRole('link', { name: GET_IN_TOUCH.cta })).toHaveAttribute('href', GET_IN_TOUCH.href)
  })

  it('has the correct id for anchor navigation', () => {
    render(<GetInTouch />)
    expect(document.getElementById(GET_IN_TOUCH.id)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/GetInTouch.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/GetInTouch.tsx`**

```tsx
import Link from 'next/link'
import { GET_IN_TOUCH } from '@/data/content'

export default function GetInTouch() {
  return (
    <section
      id={GET_IN_TOUCH.id}
      className="bg-gradient-to-br from-brand to-[#a820a5] py-20 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          {GET_IN_TOUCH.heading}
        </h2>
        <p className="text-white/80 text-lg mb-8">{GET_IN_TOUCH.body}</p>
        <Link
          href={GET_IN_TOUCH.href}
          className="inline-block bg-white text-brand font-bold px-8 py-3 rounded-full hover:bg-slate-50 transition-colors"
        >
          {GET_IN_TOUCH.cta}
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/GetInTouch.test.tsx
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add components/GetInTouch.tsx __tests__/GetInTouch.test.tsx
git commit -m "feat: GetInTouch CTA section with purple gradient"
```

---

## Task 12: Testimonials Component

**Files:**
- Create: `components/Testimonials.tsx`
- Create: `__tests__/Testimonials.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/Testimonials.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'
import { TESTIMONIALS } from '@/data/content'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /what our partners say/i })).toBeInTheDocument()
  })

  it('renders each testimonial name', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders each testimonial organisation', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach(({ org }) => {
      expect(screen.getByText(new RegExp(org))).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/Testimonials.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/Testimonials.tsx`**

```tsx
import { TESTIMONIALS } from '@/data/content'

export default function Testimonials() {
  return (
    <section className="bg-white border-b border-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
          What Our Partners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, org }) => (
            <div
              key={name}
              className="bg-brand-tint border-t-4 border-brand rounded-xl p-6 flex flex-col gap-4"
            >
              <p className="text-slate-600 italic flex-1">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="font-bold text-slate-900 text-sm">{name}</p>
                <p className="text-slate-400 text-xs">
                  {org} · {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/Testimonials.test.tsx
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Testimonials.tsx __tests__/Testimonials.test.tsx
git commit -m "feat: Testimonials section with three quote cards"
```

---

## Task 13: Supporters Component

**Files:**
- Create: `components/Supporters.tsx`
- Create: `__tests__/Supporters.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/Supporters.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Supporters from '@/components/Supporters'
import { SUPPORTERS } from '@/data/content'

describe('Supporters', () => {
  it('renders the section heading', () => {
    render(<Supporters />)
    expect(screen.getByText(/partners & supporters/i)).toBeInTheDocument()
  })

  it('renders a placeholder for each supporter', () => {
    render(<Supporters />)
    SUPPORTERS.forEach(({ name }) => {
      expect(screen.getByTitle(name)).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/Supporters.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/Supporters.tsx`**

```tsx
import { SUPPORTERS } from '@/data/content'
import Image from 'next/image'

export default function Supporters() {
  return (
    <section className="bg-brand-tint border-b border-brand-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Partners &amp; Supporters
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {SUPPORTERS.map(({ name, logo }) =>
            logo ? (
              <Image
                key={name}
                src={logo}
                alt={name}
                title={name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <div
                key={name}
                title={name}
                className="h-10 w-28 bg-brand-border rounded flex items-center justify-center text-xs font-semibold text-brand opacity-60"
              >
                {name}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/Supporters.test.tsx
```

Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Supporters.tsx __tests__/Supporters.test.tsx
git commit -m "feat: Supporters logo strip section"
```

---

## Task 14: Footer Component

**Files:**
- Create: `components/Footer.tsx`
- Create: `__tests__/Footer.test.tsx`

- [ ] **Step 1: Write failing test**

Create `__tests__/Footer.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import { FOOTER } from '@/data/content'

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(FOOTER.copyright))).toBeInTheDocument()
  })

  it('renders the ABN', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(FOOTER.abn))).toBeInTheDocument()
  })

  it('renders the acknowledgement of Country', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.acknowledgement)).toBeInTheDocument()
  })

  it('renders LinkedIn and Instagram footer links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/Footer.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Create `components/Footer.tsx`**

```tsx
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <Image
            src="/logo.png"
            alt="tekFoundation"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert"
          />
          <div className="flex gap-6 text-sm">
            <Link
              href={FOOTER.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href={FOOTER.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 space-y-3 text-sm text-center sm:text-left">
          <p>{FOOTER.acknowledgement}</p>
          <p className="text-slate-500">
            {FOOTER.copyright} · {FOOTER.abn} · ACNC Registered Charity
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/Footer.test.tsx
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx __tests__/Footer.test.tsx
git commit -m "feat: Footer with acknowledgement of Country and social links"
```

---

## Task 15: Assemble Page + Full Test Run

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Assemble `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import CharityPartners from '@/components/CharityPartners'
import VolunteerProjects from '@/components/VolunteerProjects'
import GetInTouch from '@/components/GetInTouch'
import Testimonials from '@/components/Testimonials'
import Supporters from '@/components/Supporters'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CharityPartners />
        <VolunteerProjects />
        <GetInTouch />
        <Testimonials />
        <Supporters />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run full test suite**

```bash
npm test
```

Expected: All test suites pass. Note the total number of passing tests.

- [ ] **Step 3: Start dev server and visually verify the page**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- Sticky navbar with logo, About Us link, social icons, Donate pill
- Hero with gradient background, headline, two pill buttons
- Stats bar (55+, 1,800+, $300k+) in brand purple
- Charity Partners strip on brand tint background
- Volunteer project pill tags
- Full-width purple gradient CTA section
- Three testimonial cards with purple top border
- Supporters strip
- Dark footer with acknowledgement

Stop with Ctrl+C.

- [ ] **Step 4: Add `.gitignore` entry for visual companion files**

Add to `.gitignore`:

```
.superpowers/
```

- [ ] **Step 5: Final commit**

```bash
git add app/page.tsx .gitignore
git commit -m "feat: assemble full landing page — all sections complete"
```

---

## Task 16: Build Check

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Exits with code 0. Note any warnings (not errors) about image optimisation — these are fine.

- [ ] **Step 2: Fix any TypeScript or lint errors**

If `npm run build` fails, read the error output and fix the flagged file. Common causes:
- Missing `alt` on `<Image>` — add `alt={name}` 
- Unused import — remove it
- `next/image` with external `src` without `remotePatterns` — only applies if using external image URLs (not `public/`)

Re-run `npm run build` after each fix until it passes.

- [ ] **Step 3: Commit fixes (if any)**

```bash
git add -A
git commit -m "fix: resolve build warnings and type errors"
```
