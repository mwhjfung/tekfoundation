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
