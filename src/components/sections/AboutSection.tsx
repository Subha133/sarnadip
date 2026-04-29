import ScrollReveal from '@/components/ui/ScrollReveal'

interface AboutData { title: string; description: string }

const stats = [
  { number: '3+',   label: 'Years Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '50+',  label: 'Happy Clients' },
  { number: '3',    label: 'Core Services' },
]

const tags = ['Graphic Design', 'Motion Graphics', 'Video Editing', 'Brand Identity']

export default function AboutSection({ about }: { about: AboutData }) {
  return (
    <section id="about" className="section-padding bg-surface-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Stats ── */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -top-8 -left-6 font-heading text-[160px] md:text-[200px] font-bold text-accent/6 leading-none select-none">
                A
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4 pt-8">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="bg-surface-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <p className="font-heading text-3xl md:text-4xl font-semibold text-accent">{s.number}</p>
                    <p className="text-text-secondary text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Text ── */}
          <ScrollReveal direction="right" delay={150}>
            <div className="space-y-6">
              <div>
                <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">— Who I Am</span>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mt-3 leading-tight">
                  {about.title}
                </h2>
                <div className="w-12 h-[2px] bg-accent mt-4" />
              </div>

              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                {about.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-accent/20 text-xs text-accent bg-accent/5 font-medium hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <blockquote className="border-l-2 border-accent/30 pl-5 mt-6">
                <p className="font-heading text-lg italic text-text-secondary font-light">
                  "Design is not just what it looks like — design is how it works."
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
