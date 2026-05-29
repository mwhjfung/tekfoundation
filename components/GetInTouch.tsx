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
