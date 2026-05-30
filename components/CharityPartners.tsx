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
                role="img"
                aria-label={name}
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
