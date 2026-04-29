interface NavItem { name: string; link: string }
interface Props   { siteName: string; navigation: NavItem[] }

export default function Footer({ siteName, navigation }: Props) {
  const year = new Date().getFullYear()

  const scrollTo = (link: string) => {
    document.getElementById(link.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface-dark text-white/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <p className="font-heading text-xl text-white font-semibold">
              Swarna<span className="text-accent-light">dip</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-1 mb-1.5" />
            </p>
            <p className="text-xs mt-1 text-white/40">Graphic Designer · Motion Artist · Video Editor</p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navigation.map(item => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollTo(item.link)}
                    className="text-xs hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© {year} {siteName}. All rights reserved.</p>
          <p className="text-xs text-white/20">Designed & Developed with ♥ in Kolkata</p>
        </div>
      </div>
    </footer>
  )
}
