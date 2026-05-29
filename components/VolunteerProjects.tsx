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
