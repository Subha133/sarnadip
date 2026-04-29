import { useEffect, useRef } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

export function useScrollReveal<T extends HTMLElement>(
  direction: Direction = 'up',
  delay = 0,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial class based on direction
    el.classList.add('reveal')
    if (direction === 'left')  el.classList.add('from-left')
    if (direction === 'right') el.classList.add('from-right')
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [direction, delay])

  return ref
}
