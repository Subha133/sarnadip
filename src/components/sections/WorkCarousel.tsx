import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import data from "@/data/data.json";

export default function WorkCarousel() {
  const images = data.my_work.images;
  const duplicated = [...images, ...images];

  const [selected, setSelected] = useState<string | null>(null);
  const speed = "30s"; // 🔥 change this to control speed

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        {data.my_work.title}
      </h2>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Row 1 */}
      <div
        className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ "--duration": speed } as React.CSSProperties}
      >
        {duplicated.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelected(src)}
            className="w-72 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          >
            <img
              src={src}
              alt="work"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Row 2 */}
      <div
        className="flex gap-8 w-max mt-12 animate-marquee-reverse hover:[animation-play-state:paused]"
        style={{ "--duration": speed } as React.CSSProperties}
      >
        {duplicated.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelected(src)}
            className="w-72 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          >
            <img
              src={src}
              alt="work"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
