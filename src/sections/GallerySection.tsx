import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCard {
  id: number;
  caption: string;
  rotate: number;
}

const photos: PhotoCard[] = [
  { id: 1, caption: "Our quiet smiles", rotate: -2.5 },
  { id: 2, caption: "The laughter we never planned", rotate: 1.8 },
  { id: 3, caption: "The sky we watched together", rotate: -1.2 },
  { id: 4, caption: "Small moments that meant everything", rotate: 2.5 },
  { id: 5, caption: "Memories that still feel alive", rotate: -1.5 },
  { id: 6, caption: "Moments I wish I could pause", rotate: 1.3 },
  { id: 7, caption: "The way you looked at me", rotate: -2 },
  { id: 8, caption: "A memory that never fades", rotate: 2 },
];

const GallerySection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const photo = photos[current];

  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "clamp(80px, 12vw, 140px) 24px",
        background:
          "linear-gradient(180deg, #060d1a 0%, #0d2137 50%, #060d1a 100%)",
        overflow: "hidden",
      }}
    >
      <div
        className="geometric-pattern"
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Title */}
        <FadeInSection delay={0}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "0.3em",
                color: "rgba(244,168,184,0.7)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Memories
            </p>

            <h2
              style={{
                fontSize: "clamp(2rem, 5.5vw, 4rem)",
                fontWeight: 300,
                color: "#f8f4e8",
                lineHeight: 1.2,
              }}
            >
              Moments That Still Live
              <br />
              <span style={{ color: "#f0c96e", fontStyle: "italic" }}>
                In My Heart
              </span>
            </h2>
          </div>
        </FadeInSection>

        {/* Slider */}
        <FadeInSection delay={0.2}>
          <div style={{ position: "relative" }}>
            {/* Main Image */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "480px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: "clamp(260px, 50vw, 340px)",
                    background: "#fff",
                    padding: "10px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                    transform: `rotate(${photo.rotate}deg)`,
                  }}
                >
                  <img
                    src={`/images/${photo.id}.png`}
                    alt={photo.caption}
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                    }}
                  />

                  <p
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#444",
                    }}
                  >
                    {photo.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                marginTop: "30px",
              }}
            >
              <button onClick={prev}>
                <ChevronLeft color="#d4a843" />
              </button>

              <div style={{ display: "flex", gap: "8px" }}>
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background:
                        i === current
                          ? "#d4a843"
                          : "rgba(212,168,67,0.3)",
                      border: "none",
                    }}
                  />
                ))}
              </div>

              <button onClick={next}>
                <ChevronRight color="#d4a843" />
              </button>
            </div>

            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(212,168,67,0.4)",
                marginTop: "20px",
              }}
            >
              Some memories never fade, even when time moves forward.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default GallerySection;