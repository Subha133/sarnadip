import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const videos = [
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322587/Mudit_Sir_Reel_12_d9ohqs.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322567/Anamika_ma_am_reel_1_fxld72.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322564/Rizwan_Sir_Reel_3_v4u38a.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322554/Zaid_Khan_sir_reel_5_alrf6h.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322554/Wellvora_Reel_6_oke1fk.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322552/Deepti_ma_am_reel_2_gqowzp.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322546/Zaid_Khan_sir_reel_6_jyisvq.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322541/Rizwan_Sir_Reel_4_ss4spl.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322535/Anamika_ma_am_reel_3_nf5wu4.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322520/Deepti_ma_am_reel_2_vlxpw5.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322478/Zaid_Khan_sir_reel_6_tuzi9e.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322478/Rizwan_Sir_Reel_4_dcivvt.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322478/Anamika_ma_am_reel_3_lcaayy.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322473/Anamika_ma_am_reel_1_twwh6z.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322472/Rizwan_Sir_Reel_3_xahpdj.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322472/Zaid_Khan_sir_reel_5_mseowk.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322472/Wellvora_Reel_6_tf1seh.mp4",
  "https://res.cloudinary.com/dzr5dorsx/video/upload/v1773322466/Mudit_Sir_Reel_12_kophcv.mp4"
];
export default function VideoCarousel() {
  const duplicated = [...videos, ...videos, ...videos]; // Triple for seamless infinite loop
  const speed = "45s";

  return (
    <div className="mt-24 pt-16 border-t border-white/10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">— Video Gallery</span>
          <h3 className="font-heading text-3xl md:text-4xl font-light mt-3">
            Featured Videos
          </h3>
        </div>
      </ScrollReveal>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Left to Right */}
      <div
        className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ "--duration": speed } as React.CSSProperties}
      >
        {duplicated.map((src, index) => (
          <motion.div
            key={`row1-${index}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-80 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-surface-secondary border border-white/5"
          >
            <video
              src={src}
              className="w-full h-[450px] object-cover"
              controls
              playsInline
              muted
              autoPlay
              loop
            />
          </motion.div>
        ))}
      </div>

      {/* Row 2 - Right to Left */}
      <div
        className="flex gap-8 w-max mt-12 animate-marquee-reverse hover:[animation-play-state:paused]"
        style={{ "--duration": speed } as React.CSSProperties}
      >
        {duplicated.map((src, index) => (
          <motion.div
            key={`row2-${index}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-80 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-surface-secondary border border-white/5"
          >
            <video
              src={src}
              className="w-full h-[450px] object-cover"
              controls
              playsInline
              muted
              autoPlay
              loop
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
