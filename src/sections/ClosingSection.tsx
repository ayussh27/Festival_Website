import React from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';
import FloatingLanterns from '../components/FloatingLanterns';

const closingLines = [
  { text: "Life is strange.", delay: 0 },
  { text: "Sometimes the people we imagine forever with", delay: 0.1 },
  { text: "become memories we carry gently.", delay: 0.15 },
  { text: "", delay: 0 },
  { text: "But that doesn't make the story sad.", delay: 0.2, color: '#f0c96e' },
  { text: "", delay: 0 },
  { text: "It makes it beautiful.", delay: 0.25, large: true },
  { text: "", delay: 0 },
  { text: "Because once upon a time", delay: 0.15 },
  { text: "two hearts met", delay: 0.2, italic: true, color: '#f0c96e' },
  { text: "and created something real.", delay: 0.25 },
  { text: "", delay: 0 },
  { text: "And real things never truly disappear.", delay: 0.2, large: true },
];

const ClosingSection: React.FC = () => {
  return (
    <>
      {/* Closing main section */}
      <section
        id="closing"
        style={{
          position: 'relative',
          padding: 'clamp(80px, 12vw, 140px) 24px',
          background: 'linear-gradient(180deg, #060d1a 0%, #0a1628 40%, #0a1f0f 80%, #060d1a 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          className="geometric-pattern"
          style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
        />

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Title */}
          <FadeInSection delay={0}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p
                className="font-handwritten"
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.3em',
                  color: 'rgba(244,168,184,0.6)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                And so...
              </p>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                  fontWeight: 300,
                  color: '#f8f4e8',
                }}
              >
                Before You{' '}
                <span style={{ color: '#f0c96e', fontStyle: 'italic' }}>Leave</span>
              </h2>
              <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
            </div>
          </FadeInSection>

          {/* Lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
            {closingLines.map((line, i) => {
              if (line.text === "") return <div key={i} style={{ height: '12px' }} />;
              return (
                <FadeInSection key={i} delay={(line.delay ?? 0) + 0.1} direction="up">
                  <p
                    className={line.italic ? "font-serif" : line.large ? "font-serif" : "font-body"}
                    style={{
                      fontSize: line.large
                        ? 'clamp(1.2rem, 2.8vw, 1.7rem)'
                        : 'clamp(0.95rem, 2vw, 1.15rem)',
                      fontStyle: line.italic || line.large ? 'italic' : 'normal',
                      fontWeight: line.large ? 400 : 300,
                      lineHeight: 1.9,
                      color: line.color || 'rgba(248,244,232,0.75)',
                      textShadow: line.large
                        ? '0 0 30px rgba(212,168,67,0.2)'
                        : 'none',
                    }}
                  >
                    {line.text}
                  </p>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          position: 'relative',
          padding: 'clamp(60px, 10vw, 120px) 24px clamp(40px, 8vw, 80px)',
          background: 'linear-gradient(180deg, #060d1a 0%, #040810 100%)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <FloatingLanterns />

        <div
          className="geometric-pattern"
          style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}
        />

        {/* Moon */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '80px',
          zIndex: 2,
        }}>
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" fill="url(#footerMoon)" opacity="0.6" />
            <circle cx="62" cy="42" r="30" fill="rgba(4,8,16,0.4)" />
            <defs>
              <radialGradient id="footerMoon" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#fff8e1" />
                <stop offset="60%" stopColor="#d4a843" />
                <stop offset="100%" stopColor="#b8860b" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 3, marginTop: '60px' }}>
          {/* Final quote */}
          <FadeInSection delay={0} direction="none">
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: '48px',
              padding: '32px 24px',
              background: 'linear-gradient(135deg, rgba(212,168,67,0.04), rgba(45,106,79,0.06))',
              border: '1px solid rgba(212,168,67,0.1)',
              borderRadius: '12px',
            }}>
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'rgba(248,244,232,0.65)',
                  lineHeight: 1.9,
                  marginBottom: '0',
                }}
              >
                "Some stories don't end…
                <br />
                <span style={{ color: '#f0c96e' }}>
                  they simply learn to exist in a different way."
                </span>
              </p>
            </div>
          </FadeInSection>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)',
            maxWidth: '400px',
            margin: '0 auto 40px',
          }} />

          {/* Eid Mubarak & Signature */}
          <FadeInSection delay={0.2} direction="up">
            <motion.p
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 300,
                color: '#f8f4e8',
                marginBottom: '8px',
              }}
            >
              Eid Mubarak, Sana 🌙
            </motion.p>

            <p
              className="font-handwritten"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#d4a843',
                letterSpacing: '0.05em',
                marginBottom: '40px',
              }}
            >
              From Ayussh, with love.
            </p>
          </FadeInSection>

          {/* Small ornamental stars */}
          <FadeInSection delay={0.3} direction="none">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              {['✦', '🌙', '✦'].map((s, i) => (
                <span
                  key={i}
                  style={{
                    color: i === 1 ? '#d4a843' : 'rgba(212,168,67,0.4)',
                    fontSize: i === 1 ? '18px' : '12px',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <p
              className="font-body"
              style={{
                fontSize: '11px',
                color: 'rgba(248,244,232,0.2)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Made with love · Eid 2025
            </p>
          </FadeInSection>
        </div>
      </footer>
    </>
  );
};

export default ClosingSection;
