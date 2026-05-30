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
