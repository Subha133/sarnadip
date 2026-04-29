import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

interface SkillLogo { name: string; image: string }
interface SkillsData { title: string; description: string; software_logos: SkillLogo[] }

const fallbacks: Record<string, { bg: string; color: string; abbr: string }> = {
  'Adobe Photoshop':    { bg: '#001e36', color: '#31a8ff', abbr: 'Ps' },
  'Adobe Illustrator':  { bg: '#330000', color: '#ff9a00', abbr: 'Ai' },
  'Adobe After Effects':{ bg: '#00005b', color: '#9999ff', abbr: 'Ae' },
  'Adobe Premiere Pro': { bg: '#00005b', color: '#9999ff', abbr: 'Pr' },
  'Adobe InDesign':     { bg: '#49021f', color: '#ff3366', abbr: 'Id' },
  'Adobe XD':           { bg: '#470137', color: '#ff61f6', abbr: 'Xd' },
  'Figma':              { bg: '#1e1e1e', color: '#a259ff', abbr: 'Fg' },
  'Canva':              { bg: '#e8fafb', color: '#00c4cc', abbr: 'Cv' },
}

export default function SkillsSection({ skills }: { skills: SkillsData }) {
  return (
    <section id="skills" className="section-padding bg-surface-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader title={skills.title} subtitle={skills.description} align="center" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {skills.software_logos.map((skill, idx) => {
            const fb = fallbacks[skill.name] ?? { bg: '#f5f5f5', color: '#888', abbr: skill.name.slice(0, 2) }
            return (
              <ScrollReveal key={skill.name} delay={idx * 80}>
                <div className="group flex flex-col items-center gap-3">
                  <div className="relative w-full aspect-square rounded-2xl bg-surface-card border border-surface-secondary overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                    {/* Fallback tile (always rendered behind) */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-xl"
                      style={{ background: fb.bg }}
                    >
                      <span className="font-mono font-bold text-2xl" style={{ color: fb.color }}>
                        {fb.abbr}
                      </span>
                    </div>

                    {/* Image with grayscale hover */}
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-logo absolute inset-0 w-full h-full object-contain p-4"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />

                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-300 rounded-2xl" />
                    <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent/60 transition-all duration-300" />
                  </div>

                  <span className="text-center text-xs text-text-muted group-hover:text-accent transition-colors duration-300 font-medium leading-tight">
                    {skill.name.replace('Adobe ', '')}
                  </span>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="font-mono text-xs text-text-muted/60 tracking-widest uppercase">& More</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-accent/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
