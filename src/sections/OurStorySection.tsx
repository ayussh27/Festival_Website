import React from 'react';
import FadeInSection from '../components/FadeInSection';

const storyParagraphs = [
  { text: "We started as strangers.", delay: 0 },
  {
    text: "Somewhere between laughter,\nlong conversations,\nand quiet moments together…",
    delay: 0.15,
    italic: true,
  },
  { text: "we became something much more.", delay: 0.3, highlight: true },
  {
    text: "We shared days that felt lighter,\ndreams that felt possible,\nand memories that quietly became a part of us.",
    delay: 0.15,
  },
  {
    text: "Life tested our path.\nAnd today we walk differently.",
    delay: 0.15,
    italic: true,
  },
  { text: "But some connections never truly disappear.", delay: 0.2, highlight: true },
  {
    text: "They simply become softer…\nquieter…\nand deeper.",
    delay: 0.15,
    italic: true,
    soft: true,
  },
];

const OurStorySection: React.FC = () => {
  return (
    <section
      id="our-story"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(180deg, #060d1a 0%, #0a1628 40%, #071b10 80%, #060d1a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative pattern */}
      <div
        className="islamic-overlay"
        style={{
          position: 'absolute', inset: 0,
          opacity: 0.5, pointerEvents: 'none',
        }}
      />

      {/* Left emerald accent */}
      <div style={{
        position: 'absolute',
        left: 0, top: '20%', bottom: '20%',
        width: '3px',
        background: 'linear-gradient(180deg, transparent, rgba(82,183,136,0.4), transparent)',
      }} />
      <div style={{
        position: 'absolute',
        right: 0, top: '30%', bottom: '30%',
        width: '3px',
        background: 'linear-gradient(180deg, transparent, rgba(212,168,67,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <FadeInSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              className="font-handwritten"
              style={{
                fontSize: '14px',
                letterSpacing: '0.3em',
                color: 'rgba(82,183,136,0.7)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Chapter One
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 300,
                color: '#f8f4e8',
                marginBottom: '8px',
              }}
            >
              Safar-e-Hum
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: '13px',
                letterSpacing: '0.2em',
                color: 'rgba(212,168,67,0.5)',
              }}
            >
              Our Journey
            </p>
            <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
          </div>
        </FadeInSection>

        {/* Story paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {storyParagraphs.map((para, i) => (
            <FadeInSection key={i} delay={para.delay ?? 0} direction="up">
              <p
                className={para.italic ? "font-serif" : "font-body"}
                style={{
                  fontSize: para.highlight
                    ? 'clamp(1.2rem, 2.8vw, 1.7rem)'
                    : 'clamp(1rem, 2.2vw, 1.3rem)',
                  fontWeight: para.highlight ? 400 : 300,
                  fontStyle: para.italic ? 'italic' : 'normal',
                  lineHeight: 1.9,
                  whiteSpace: 'pre-line',
                  textAlign: 'center',
                  color: para.highlight
                    ? '#f0c96e'
                    : para.soft
                    ? 'rgba(248,244,232,0.55)'
                    : 'rgba(248,244,232,0.85)',
                  textShadow: para.highlight
                    ? '0 0 30px rgba(212,168,67,0.3)'
                    : 'none',
                }}
              >
                {para.text}
              </p>
            </FadeInSection>
          ))}
        </div>

        {/* Closing ornament */}
        <FadeInSection delay={0.2} direction="none">
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
              <path d="M10 15 Q40 5 70 15" stroke="rgba(212,168,67,0.4)" strokeWidth="1" fill="none" />
              <circle cx="40" cy="10" r="3" fill="rgba(212,168,67,0.5)" />
              <circle cx="25" cy="13" r="2" fill="rgba(212,168,67,0.3)" />
              <circle cx="55" cy="13" r="2" fill="rgba(212,168,67,0.3)" />
            </svg>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default OurStorySection;
