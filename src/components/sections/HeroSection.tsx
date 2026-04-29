import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { useTypewriter } from '@/hooks/useTypewriter'
import SocialIcon from '@/components/ui/SocialIcon'

interface HeroData {
  name: string
  title: string[]
  photo: string
  cta: { primary: string; secondary: string }
  social_links: { platform: string; url: string }[]
}

export default function HeroSection({ hero }: { hero: HeroData }) {
  const [mounted, setMounted] = useState(false)
  const displayText = useTypewriter(hero.title)

  useEffect(() => { setMounted(true) }, [])

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[80px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text ── */}
          <div
            className="space-y-8 transition-all duration-1000"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(32px)' }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent" />
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">Portfolio</span>
            </div>

            {/* Name */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
              Hello, I'm
              <br />
              <span className="text-accent font-semibold italic">{hero.name}</span>
            </h1>

            {/* Typewriter */}
            <div className="h-8 md:h-10">
              <span className="font-body text-lg md:text-xl text-text-secondary font-light">
                {displayText}
                <span className="inline-block w-[2px] h-5 bg-accent ml-0.5 align-middle animate-blink" />
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={scrollToContact} className="btn-primary">
                {hero.cta.primary}
                <FiArrowRight size={16} />
              </button>
              <a href={`mailto:deyswarnadip6@gmail.com`} className="btn-secondary">
                {hero.cta.secondary}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-text-muted tracking-wider uppercase mr-2">Follow</span>
              {hero.social_links.map(s => (
                <SocialIcon key={s.platform} platform={s.platform} url={s.url} />
              ))}
            </div>
          </div>

          {/* ── Right: Profile image ── */}
          <div
            className="flex justify-center lg:justify-end transition-all duration-1000 delay-300"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateX(32px)' }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-110 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125 animate-spin-reverse" />

              {/* Floating image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
                <div className="absolute inset-4 rounded-3xl bg-accent/10 rotate-6" />
                <div className="absolute inset-4 rounded-3xl bg-surface-secondary -rotate-3" />

                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-surface-card shadow-[0_20px_60px_rgba(124,58,237,0.25)]">
                  {/* Fallback gradient behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary via-accent/10 to-accent/20 flex items-center justify-center">
                    <span className="font-heading text-7xl text-accent/40 font-light">
                      {hero.name.charAt(0)}
                    </span>
                  </div>
                  <img
                    src={hero.photo}
                    alt={hero.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                {/* Freelance badge */}
                <div className="absolute -bottom-4 -left-4 bg-surface-card rounded-2xl shadow-card px-4 py-3 border border-surface-secondary">
                  <span className="font-mono text-xs text-text-muted">Available for</span>
                  <p className="font-body text-sm font-semibold text-text-primary">Freelance Work</p>
                  <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-text-muted tracking-widest">scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
