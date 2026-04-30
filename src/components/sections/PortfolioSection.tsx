import { useState, useEffect, useRef, useCallback } from 'react'
import { FiArrowLeft, FiArrowRight, FiLinkedin } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import data from '@/data/data.json'
import VideoCarousel from './VideoCarousel'

interface Project { title: string; category: string; image: string }
interface PortfolioData { title: string; layout: string; projects: Project[] }

const WorkSubsection = () => {
  const images = data.my_work.images;
  const duplicated = [...images, ...images];
  const [selected, setSelected] = useState<string | null>(null);
  const speed = "30s";

  return (
    <div className="mt-24 pt-16 border-t border-white/10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">— My Work Gallery</span>
          <h3 className="font-heading text-3xl md:text-4xl font-light mt-3">
            {data.my_work.title}
          </h3>
        </div>
      </ScrollReveal>

      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]" style={{ "--duration": speed } as React.CSSProperties}>
        {duplicated.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            onClick={() => setSelected(src)}
            className="w-72 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          >
            <img src={src} className="w-full h-96 object-cover" />
          </motion.div>
        ))}
      </div>

      <div className="flex gap-8 w-max mt-12 animate-marquee-reverse hover:[animation-play-state:paused]" style={{ "--duration": speed } as React.CSSProperties}>
        {duplicated.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            onClick={() => setSelected(src)}
            className="w-72 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          >
            <img src={src} className="w-full h-96 object-cover" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PortfolioSection({ portfolio }: { portfolio: PortfolioData }) {
  const { projects } = portfolio
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setActive(idx)
    setTimeout(() => setAnimating(false), 500)
  }, [animating])

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive(a => (a + 1) % projects.length)
    }, 4000)
  }, [projects.length])

  useEffect(() => {
    startAutoplay()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startAutoplay])

  const handlePrev = () => { goTo((active - 1 + projects.length) % projects.length); startAutoplay() }
  const handleNext = () => { goTo((active + 1) % projects.length); startAutoplay() }

  const current = projects[active]

  return (
    <section id="portfolio" className="section-padding bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">— Selected Works</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mt-3">
                {portfolio.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/swarnadip-dey-66b4b9225"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-text-muted/30 flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </a>

              {/* Prev */}
              <button onClick={handlePrev} className="w-12 h-12 rounded-full border flex items-center justify-center">
                <FiArrowLeft />
              </button>

              {/* Next */}
              <button onClick={handleNext} className="w-12 h-12 rounded-full border flex items-center justify-center">
                <FiArrowRight />
              </button>

            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img src={current.image} className="rounded-2xl" />
          <div>
            <h3 className="text-3xl">{current.title}</h3>
            <p className="mt-2">{current.category}</p>
          </div>
        </div>

        <WorkSubsection />
        <VideoCarousel />
      </div>
    </section>
  )
}