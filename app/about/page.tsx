import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us — tekFoundation',
  description:
    'We help charities amplify their impact by harnessing the best minds and methods in digital innovation.',
}

const VALUES = [
  {
    title: 'Connection',
    body: 'Creating meaningful relationships that drive impactful change and bring fulfilment to both charities and volunteers.',
  },
  {
    title: 'Collaborative Spirit',
    body: 'Working together to develop understanding of challenges and strengths, creating tailored solutions.',
  },
  {
    title: 'Mutual Learning',
    body: 'Fostering a community centred on knowledge sharing and personal development.',
  },
]

const TEAM = [
  { name: 'Nick Shepherd', role: 'Co-Founder, Director', org: 'CEO, tekFinder' },
  { name: 'Joni Fleischer', role: 'Co-Founder, Director', org: 'Head of tekFoundation' },
  { name: 'Dr Robert Winter', role: 'Director, Board Chair', org: 'Head of PMO, PRP Diagnostic Imaging' },
  { name: 'Lucy Timms', role: 'Director', org: 'Director of Operations, Australian Schools Plus' },
  { name: 'Aidan Beanland', role: 'Director', org: 'AD — SEO & Content Strategy, Optus' },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((n) => n[0])
    .join('')
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-tint via-white to-slate-50 py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              We help charities amplify their impact.
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              By harnessing the best minds and methods in digital innovation, we connect Australian
              charities with skilled volunteers ready to make a difference.
            </p>
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="bg-white border-b border-slate-100 py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3">Mission</p>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why we exist</h2>
              <p className="text-slate-500 leading-relaxed">
                To empower Australian charities by creating strategic connections in the tech
                community, so charities can focus on their missions, upskill their teams, and
                deliver good in the world.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3">Vision</p>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Where we&apos;re headed</h2>
              <p className="text-slate-500 leading-relaxed">
                A level playing field where charities have equal opportunity to succeed, supported
                by skilled volunteers eager to help.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-brand-tint border-b border-brand-border py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3 text-center">
              Values
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              What guides us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUES.map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl p-8 border-t-4 border-brand"
                >
                  <h3 className="text-sm font-bold tracking-widest text-brand uppercase mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3 text-center">
              The Team
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              Meet the people behind tekFoundation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM.map(({ name, role, org }) => (
                <div
                  key={name}
                  className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 hover:border-brand-border transition-colors"
                >
                  <div className="size-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {initials(name)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-brand text-xs font-semibold mt-0.5">{role}</p>
                    <p className="text-slate-400 text-xs mt-1">{org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
