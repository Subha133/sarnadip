import { useState, useEffect } from 'react'

export function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseMs = 2200) {
  const [index, setIndex]       = useState(0)
  const [display, setDisplay]   = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplay(prev =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        )
      }, deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, index, words, typingSpeed, deletingSpeed, pauseMs])

  return display
}
