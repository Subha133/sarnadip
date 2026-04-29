import { useState, useEffect } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

interface NavItem { name: string; link: string }
interface Props   { navigation: NavItem[]; siteName: string }

export default function Navbar({ navigation, siteName: _siteName }: Props) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  const sectionIds = navigation.map(n => n.link.replace('#', ''))
  const active     = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (link: string) => {
    setMenuOpen(false)
    const el = document.getElementById(link.replace('#', ''))
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-3xl rounded-2xl border backdrop-blur-md transition-all duration-500 ${
          scrolled
            ? 'bg-surface/90 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.24)]'
            : 'bg-surface/60 border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="font-heading text-xl md:text-2xl font-semibold tracking-tight group">
            <span className="text-text-primary">Swarna</span>
            <span className="text-accent">dip</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-1 mb-2 group-hover:animate-ping" />
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navigation.map(item => {
              const id       = item.link.replace('#', '')
              const isActive = active === id
              return (
                <li key={item.name}>
                  <button
                    onClick={() => scrollTo(item.link)}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                      isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {isActive && <span className="absolute inset-0 bg-accent/[0.08] rounded-full" />}
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col border-t border-white/[0.06] px-4 py-3 gap-1">
            {navigation.map(item => {
              const id       = item.link.replace('#', '')
              const isActive = active === id
              return (
                <li key={item.name}>
                  <button
                    onClick={() => scrollTo(item.link)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      isActive
                        ? 'text-accent bg-accent/[0.06]'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
