import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DonateWidget from './DonateWidget'

export const metadata: Metadata = {
  title: 'Donate — tekFoundation',
  description:
    'Make an impact today. Your donation subsidises matching services for Australian charities so they can focus on their mission.',
}

const PILLARS = [
  {
    title: 'Unleash hidden potential',
    body: 'Connects tech talent across Australia with causes that need specialised skills — bridging the gap between the sector and the people best placed to help.',
  },
  {
    title: 'Fund a new giving economy',
    body: 'Revolutionises how volunteers, employers, and charities demonstrate the value of skilled volunteering, creating lasting change beyond individual projects.',
  },
  {
    title: 'Exponential impact',
    body: 'Acts as an enabler and multiplier, expanding what charities can achieve with every dollar and every hour donated by the tech community.',
  },
]

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-brand to-[#a820a5] py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Make an impact today.
            </h1>
            <p className="text-white/80 text-lg">
              Your donation subsidises matching services for Australian charities, enabling them to
              concentrate on their missions rather than recruitment challenges.
            </p>
          </div>
        </section>

        {/* Why give */}
        <section className="bg-white border-b border-slate-100 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3 text-center">
              Why give
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              Every dollar goes further here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILLARS.map(({ title, body }) => (
                <div key={title} className="bg-brand-tint rounded-xl p-8 border-t-4 border-brand">
                  <h3 className="font-extrabold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation widget */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3 text-center">
              Give now
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
              Choose your contribution
            </h2>
            <DonateWidget />
          </div>
        </section>

        {/* Tax info */}
        <section className="bg-white border-b border-slate-100 py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              tekFoundation is an ACNC-registered charity. We are not currently a DGR-registered
              organisation, which means standard donations are not tax-deductible. However, major
              donors contributing{' '}
              <span className="font-semibold text-slate-700">$5,000 or more</span> can access
              tax-deductible options through our auspice partnership.
            </p>
            <Link
              href="mailto:joni@tekfoundation.org.au"
              className="text-brand font-semibold text-sm hover:underline"
            >
              Contact joni@tekfoundation.org.au for major donor enquiries →
            </Link>
          </div>
        </section>

        {/* Corporate CTA */}
        <section className="bg-brand-tint py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-brand uppercase mb-3">
              Corporate giving
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Partner with us as a sponsor
            </h2>
            <p className="text-slate-500 mb-8">
              Companies can amplify their social impact by sponsoring tekFoundation&apos;s programs,
              enabling grassroots funding for charities that need it most.
            </p>
            <Link
              href="mailto:joni@tekfoundation.org.au?subject=Corporate sponsorship enquiry"
              className="inline-block bg-brand text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Enquire about sponsorship
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
