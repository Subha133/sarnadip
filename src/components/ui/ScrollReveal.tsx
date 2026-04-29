import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Props {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  delay?: number
}

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }: Props) {
  const ref = useScrollReveal<HTMLDivElement>(direction, delay)
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
