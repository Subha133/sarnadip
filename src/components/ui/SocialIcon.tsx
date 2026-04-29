import { FaInstagram, FaWhatsapp, FaBehance, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Props {
  platform: string
  url: string
}

const iconMap: Record<string, IconType> = {
  Instagram: FaInstagram,
  WhatsApp:  FaWhatsapp,
  Behance:   FaBehance,
  LinkedIn:  FaLinkedin,
  GitHub:    FaGithub,
  Twitter:   FaTwitter,
}

export default function SocialIcon({ platform, url }: Props) {
  const Icon = iconMap[platform] ?? FaInstagram
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      className="w-10 h-10 rounded-full border border-text-muted/30 flex items-center justify-center
                 text-text-secondary hover:text-white hover:border-accent hover:bg-accent
                 transition-all duration-300 hover:-translate-y-1"
    >
      <Icon size={16} />
    </a>
  )
}
