import React from 'react';
import FadeInSection from '../components/FadeInSection';

const letterLines = [
  { text: "Sana,", type: 'greeting' },
  { text: "" },
  { text: "This Eid feels different.", type: 'emphasis' },
  { text: "" },
  { text: "Not empty… just different.", type: 'italic' },
  { text: "" },
  { text: "Because when I think about our journey,", type: 'normal' },
  { text: "I don't feel regret.", type: 'normal' },
  { text: "" },
  { text: "I feel gratitude.", type: 'highlight' },
  { text: "" },
  { text: "For the laughs.", type: 'italic' },
  { text: "For the quiet moments.", type: 'italic' },
  { text: "For the love we once held so closely.", type: 'italic' },
  { text: "" },
  { text: "Today we call ourselves friends,", type: 'normal' },
  { text: "but the truth is that the respect and care I hold for you never changed.", type: 'normal' },
  { text: "" },
  { text: "Even when I smile…", type: 'italic' },
  { text: "even when life moves forward…", type: 'italic' },
  { text: "a part of my heart still carries the warmth of what we once had.", type: 'italic' },
  { text: "" },
  { text: "And maybe someday life will surprise us again.", type: 'normal' },
  { text: "" },
  { text: "Until then, I will respect your pace, your space, and your decisions.", type: 'normal' },
  { text: "" },
  { text: "But one thing will remain constant:", type: 'normal' },
  { text: "" },
  { text: "My prayers for your happiness.", type: 'highlight' },
  { text: "" },
  { text: "Eid Mubarak.", type: 'emphasis' },
  { text: "" },
  { text: "— Ayussh", type: 'signature' },
];

const EidLetterSection: React.FC = () => {
  return (
    <section
      id="letter"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(180deg, #060d1a 0%, #0a1f0f 50%, #060d1a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Pattern */}
      <div
        className="geometric-pattern"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}
      />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(82,183,136,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <FadeInSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              Written For You
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                fontWeight: 300,
                color: '#f8f4e8',
              }}
            >
              A Small Eid{' '}
              <span style={{ color: '#f0c96e', fontStyle: 'italic' }}>Letter</span>{' '}For You
            </h2>
            <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
          </div>
        </FadeInSection>

        {/* Letter paper */}
        <FadeInSection delay={0.15} direction="up">
          <div
            className="letter-paper"
            style={{
              borderRadius: '16px',
              padding: 'clamp(32px, 6vw, 60px) clamp(28px, 6vw, 56px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top ornament */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
                <path d="M10 15 Q60 5 110 15" stroke="rgba(212,168,67,0.3)" strokeWidth="1" fill="none" />
                <circle cx="60" cy="10" r="4" fill="rgba(212,168,67,0.4)" />
                <circle cx="40" cy="13" r="2.5" fill="rgba(212,168,67,0.25)" />
                <circle cx="80" cy="13" r="2.5" fill="rgba(212,168,67,0.25)" />
                <circle cx="20" cy="15" r="1.5" fill="rgba(212,168,67,0.15)" />
                <circle cx="100" cy="15" r="1.5" fill="rgba(212,168,67,0.15)" />
              </svg>
            </div>

            {/* Letter lines */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {letterLines.map((line, i) => {
                if (line.text === "") {
                  return <div key={i} style={{ height: '16px' }} />;
                }

                const isGreeting = line.type === 'greeting';
                const isHighlight = line.type === 'highlight';
                const isSignature = line.type === 'signature';
                const isEmphasis = line.type === 'emphasis';
                const isItalic = line.type === 'italic';

                return (
                  <p
                    key={i}
                    className={isSignature || isGreeting ? "font-handwritten" : isItalic || isEmphasis ? "font-serif" : "font-body"}
                    style={{
                      fontSize: isSignature
                        ? 'clamp(1.4rem, 3vw, 1.8rem)'
                        : isGreeting
                        ? 'clamp(1.2rem, 2.5vw, 1.5rem)'
                        : isHighlight || isEmphasis
                        ? 'clamp(1rem, 2vw, 1.15rem)'
                        : 'clamp(0.88rem, 1.8vw, 0.98rem)',
                      fontWeight: isHighlight ? 400 : 300,
                      fontStyle: isItalic || isEmphasis ? 'italic' : 'normal',
                      lineHeight: 1.9,
                      color: isHighlight
                        ? '#f0c96e'
                        : isSignature
                        ? '#d4a843'
                        : isGreeting
                        ? '#f8f4e8'
                        : isEmphasis
                        ? '#e8dfc8'
                        : 'rgba(248,244,232,0.72)',
                      textShadow: isHighlight
                        ? '0 0 20px rgba(212,168,67,0.3)'
                        : 'none',
                      textAlign: isSignature ? 'right' : 'left',
                      paddingLeft: isItalic ? '12px' : '0',
                      borderLeft: isItalic
                        ? '2px solid rgba(212,168,67,0.15)'
                        : 'none',
                      marginBottom: isItalic ? '2px' : '0',
                    }}
                  >
                    {line.text}
                  </p>
                );
              })}
            </div>

            {/* Bottom ornament */}
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
                <path d="M10 15 Q60 25 110 15" stroke="rgba(212,168,67,0.3)" strokeWidth="1" fill="none" />
                <circle cx="60" cy="20" r="4" fill="rgba(212,168,67,0.4)" />
                <circle cx="40" cy="17" r="2.5" fill="rgba(212,168,67,0.25)" />
                <circle cx="80" cy="17" r="2.5" fill="rgba(212,168,67,0.25)" />
              </svg>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default EidLetterSection;
