interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ title, subtitle, align = 'left' }: Props) {
  const centered = align === 'center'
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      <span className="inline-block font-mono text-accent text-xs tracking-[0.3em] uppercase mb-3">
        — {title}
      </span>
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-text-primary leading-tight">
        {title}
      </h2>
      <div className={`mt-4 w-12 h-[2px] bg-accent ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-5 text-text-secondary text-base md:text-lg leading-relaxed ${centered ? 'max-w-xl' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
