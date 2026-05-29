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
