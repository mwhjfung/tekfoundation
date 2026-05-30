import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'For Charities — tekFoundation',
  description:
    'More than a volunteer match. tekFoundation membership helps organisations develop digital capability through resourcing, community support, and practical assistance.',
}

const TIERS = [
  {
    name: 'Basic',
    price: '$500',
    period: '/year',
    tag: null,
    description: 'Designed for events, networking, and community access for self-service volunteer support.',
    benefits: [
      'Unlimited online community access',
      'Self-managed volunteer requests',
      'Free virtual events',
      'Event discounts for networking',
      'Product & service discounts',
    ],
  },
  {
    name: 'Core',
    price: '$1,500',
    period: '/year',
    tag: 'Most popular',
    description: 'For charities seeking project scoping and vetted volunteer matching.',
    benefits: [
      'Everything in Basic, plus:',
      'Up to 2 tekFoundation-supported digital initiatives annually',
      'Complete sourcing and matching support',
      'Event speaking opportunities',
      'Social media and newsletter features',
    ],
  },
  {
    name: 'Premium',
    price: '$5,000',
    period: '/year',
    tag: null,
    description: 'For organisations with $10M+ annual revenue or complex project requirements.',
    benefits: [
      'Everything in Core, plus:',
      'Strategic consulting from vetted tech experts',
      'Dedicated program manager',
    ],
  },
]

const TESTIMONIALS = [
  {
    quote: 'Thank you tekFoundation, your work in the charity space is incredible.',
    name: 'Cheryl Sing',
    role: 'Founder',
    org: 'The Laptop Initiative',
  },
  {
    quote: 'The strategic consulting support and implementation assistance transformed how we operate digitally.',
    name: 'Claire Torkington',
    role: 'CEO',
    org: 'Ability Enterprises',
  },
]

const FAQS = [
  {
    q: 'How do you define skilled volunteering?',
    a: 'Skilled volunteering involves no payment from the organisation, clearly scoped work with defined outcomes, flexible timing, and adds specialist capacity without replacing paid staff. Covered expenses, adequate organisational support, and legal/IP considerations are all addressed.',
  },
  {
    q: "What counts as an 'initiative'?",
    a: 'A standalone workstream with a clear scope — such as a website rebuild, CRM data management, internal AI workflows, social media content strategy, or a UX/SEO audit.',
  },
  {
    q: 'What does NOT qualify?',
    a: 'Introductory calls or mentoring without defined outputs, ongoing unpaid roles without a completion date, and urgent business-critical work with rigid deadlines do not qualify as initiatives.',
  },
]

export default function CharityPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-tint via-white to-slate-50 py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-4">For Charities</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              More than a volunteer match.
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              tekFoundation membership helps organisations develop digital capability through
              resourcing, community support, and practical assistance.
            </p>
          </div>
        </section>

        {/* Membership tiers */}
        <section className="bg-white border-b border-slate-100 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3 text-center">
              Membership
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              Find the right tier for your organisation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {TIERS.map(({ name, price, period, tag, description, benefits }) => (
                <div
                  key={name}
                  className={`rounded-xl border p-8 flex flex-col gap-6 ${
                    tag ? 'border-brand ring-2 ring-brand ring-offset-2' : 'border-slate-200'
                  }`}
                >
                  {tag && (
                    <span className="self-start bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-bold text-brand uppercase tracking-widest mb-1">{name}</p>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-extrabold text-slate-900">{price}</span>
                      <span className="text-slate-400 text-sm mb-1">{period}</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-2">{description}</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-brand mt-0.5 shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="mailto:hello@tekfoundation.org.au"
                    className="block text-center bg-brand text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Submit interest
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-slate-400 mt-6">
              Financial limitations should never stand in the way of impact.{' '}
              <Link href="mailto:hello@tekfoundation.org.au" className="text-brand hover:underline">
                Inquire about financial aid
              </Link>
            </p>
          </div>
        </section>

        {/* Why paid model */}
        <section className="bg-brand-tint border-b border-brand-border py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3">Our model</p>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Why we are shifting to a paid model
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Operational sustainability is our foundation principle. A membership model enables
              higher-touch program management and ecosystem support that goes beyond individual
              projects — ensuring we can serve charities with the depth and consistency they deserve.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white border-b border-slate-100 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              What our partners say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map(({ quote, name, role, org }) => (
                <div
                  key={name}
                  className="bg-brand-tint border-t-4 border-brand rounded-xl p-6 flex flex-col gap-4"
                >
                  <p className="text-slate-600 italic flex-1">&ldquo;{quote}&rdquo;</p>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-400 text-xs">{org} · {role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3 text-center">FAQ</p>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              Common questions
            </h2>
            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-slate-200 p-6">
                  <p className="font-bold text-slate-900 mb-2">{q}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
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
