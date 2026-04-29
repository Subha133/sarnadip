import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

interface ToolsData { title: string; description: string; tools: string[] }

export default function ToolsSection({ tools }: { tools: ToolsData }) {
  return (
    <section id="tools" className="section-padding bg-surface-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader title={tools.title} subtitle={tools.description} align="center" />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
          {tools.tools.map((tool, idx) => (
            <ScrollReveal key={tool} delay={idx * 50}>
              <div className="group px-5 py-3 rounded-full bg-surface-card border border-surface-secondary shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <span className="text-sm md:text-base text-text-primary group-hover:text-accent font-medium transition-colors duration-300">
                  {tool}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="font-mono text-xs text-text-muted/60 tracking-widest uppercase">Always Learning</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-accent/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
