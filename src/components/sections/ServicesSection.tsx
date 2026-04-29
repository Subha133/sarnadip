import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

interface ServicesData { title: string; items: string[] }

const categoryMeta = [
  { icon: '✦', label: 'Print & Brand',  color: 'from-accent/10 to-accent/5',           border: 'border-accent/20'  },
  { icon: '◈', label: 'Digital & Web',  color: 'from-accent-cyan/10 to-accent-cyan/5', border: 'border-accent-cyan/20' },
  { icon: '▶', label: 'Motion & Video', color: 'from-emerald-500/10 to-emerald-500/5',  border: 'border-emerald-500/20' },
]

// Item index ranges per category
const ranges: [number, number][] = [[0, 9], [9, 14], [14, 17]]

export default function ServicesSection({ services }: { services: ServicesData }) {
  return (
    <section id="service" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-accent/4 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={services.title}
            subtitle="A comprehensive range of creative services tailored to elevate your brand."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categoryMeta.map((meta, gi) => {
            const [start, end] = ranges[gi]
            const items        = services.items.slice(start, end)
            return (
              <ScrollReveal key={meta.label} delay={gi * 100}>
                <div className={`group relative bg-gradient-to-br ${meta.color} rounded-3xl border ${meta.border} p-7 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl text-accent">{meta.icon}</span>
                    <h3 className="font-heading text-xl font-medium text-text-primary">{meta.label}</h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/8 rounded-tl-[40px] transition-all duration-400 group-hover:w-28 group-hover:h-28 group-hover:bg-accent/12" />
                  <div className="absolute top-6 right-6 font-mono text-xs text-text-muted/60">
                    {String(items.length).padStart(2, '0')}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm font-mono">
              <span className="text-accent font-semibold text-base">{services.items.length}</span> services across design, digital & motion
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
