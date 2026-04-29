import { motion } from "framer-motion";

const logos = [
  "/images/WhatsApp Image 2026-03-13 at 3.47.40 PM (1).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.40 PM (2).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.40 PM.jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.41 PM (1).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.41 PM (2).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.41 PM.jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.42 PM (1).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.42 PM (2).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.42 PM.jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.43 PM (1).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.43 PM (2).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.43 PM.jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.44 PM (1).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.44 PM (2).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.44 PM.jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.45 PM (1).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.45 PM (2).jpeg",
  "/images/WhatsApp Image 2026-03-13 at 3.47.45 PM.jpeg",
];

export default function CompanyCarousel() {
  const duplicated = [...logos, ...logos, ...logos]; // Triple for seamless loop
  const speed = "40s";

  return (
    <section className="relative py-20 bg-surface-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="text-center">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">
            — Trusted By
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-light mt-3">
            Companies I've Worked With
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-surface-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-surface-secondary to-transparent z-10 pointer-events-none" />

      {/* Carousel Row */}
      <div
        className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ "--duration": speed } as React.CSSProperties}
      >
        {duplicated.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden bg-white/5 p-6 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Company logo ${index + 1}`}
              className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
