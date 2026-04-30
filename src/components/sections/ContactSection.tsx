import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ContactData { title: string; email: string; phone: string; location: string; linkedin: string }

interface ContactItem {
  key: keyof ContactData
  label: string
  Icon: React.ComponentType<{ size?: number; className?: string }>
  getValue: (c: ContactData) => string
  getHref:  (c: ContactData) => string
}

const items: ContactItem[] = [
  {
    key: 'email',
    label: 'Email',
    Icon: FiMail,
    getValue: c => c.email,
    getHref:  c => `mailto:${c.email}`,
  },
  {
    key: 'phone',
    label: 'Phone',
    Icon: FiPhone,
    getValue: c => c.phone,
    getHref:  c => `tel:${c.phone.replace(/\s/g, '')}`,
  },
  {
    key: 'location',
    label: 'Location',
    Icon: FiMapPin,
    getValue: c => c.location,
    getHref:  c => `https://maps.google.com?q=${encodeURIComponent(c.location)}`,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    Icon: FiLinkedin,
    getValue: c => { void c; return 'Connect with me' },
    getHref:  c => c.linkedin,
  },
]

export default function ContactSection({ contact }: { contact: ContactData }) {
  return (
    <section id="contact" className="section-padding bg-surface-dark text-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-10" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full bg-accent/10 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <span className="font-mono text-accent-light text-xs tracking-[0.3em] uppercase">— Get In Touch</span>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                Let's Create
                <br />
                <span className="text-accent italic">Together</span>
              </h2>
              <div className="w-12 h-[2px] bg-accent" />
              <p className="text-white/50 text-base md:text-lg leading-relaxed font-light max-w-md">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's make something amazing together.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent-light hover:shadow-accent hover:-translate-y-1 group mt-4"
              >
                Start a Conversation
                <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </ScrollReveal>

          {/* ── Right ── */}
          <ScrollReveal direction="right" delay={150}>
            <div className="space-y-4">
              {items.map(item => (
                <a
                  key={item.key}
                  href={item.getHref(contact)}
                  target={item.key === 'location' || item.key === 'linkedin' ? '_blank' : undefined}
                  rel={item.key === 'location' || item.key === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-5 p-6 rounded-2xl border border-white/[0.08] hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <item.Icon size={18} className="text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs font-mono tracking-wider uppercase mb-1">{item.label}</p>
                    <p className="text-white/80 text-base group-hover:text-white transition-colors duration-200 truncate">
                      {item.getValue(contact)}
                    </p>
                  </div>
                  <FiArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-accent transition-all duration-300 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}

              {/* Availability badge */}
              <div className="mt-8 flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <div className="relative flex-shrink-0">
                  <span className="block w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <p className="text-white/60 text-sm">
                  Currently <span className="text-green-400 font-medium">available</span> for freelance projects
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
