import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const SecretMoonSection: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = () => {
    setRevealed(true);
    setHasClicked(true);
  };

  return (
    <section
      id="secret"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(180deg, #060d1a 0%, #060d1a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Stars bg */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(212,168,67,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div
        className="geometric-pattern"
        style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <FadeInSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              className="font-handwritten"
              style={{
                fontSize: '14px',
                letterSpacing: '0.3em',
                color: 'rgba(212,168,67,0.5)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Ssshhh... it's a secret
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 300,
                color: '#f8f4e8',
              }}
            >
              Secret{' '}
              <span style={{ color: '#f0c96e', fontStyle: 'italic' }}>Moon Message</span>
            </h2>
            <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
          </div>
        </FadeInSection>

        {/* Hint */}
        {!hasClicked && (
          <FadeInSection delay={0.2} direction="none">
            <p
              className="font-body"
              style={{
                textAlign: 'center',
                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                color: 'rgba(248,244,232,0.4)',
                marginBottom: '40px',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
              }}
            >
              Click on the moon to reveal a hidden message…
            </p>
          </FadeInSection>
        )}

        {/* Moon button */}
        <FadeInSection delay={0.3} direction="none">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
            <motion.button
              className="moon-secret"
              onClick={handleClick}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '20px',
                position: 'relative',
              }}
              title="Click to reveal a secret message"
            >
              {/* Glow rings */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212,168,67,0.4)',
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  inset: '-35px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212,168,67,0.2)',
                }}
              />

              {/* Moon SVG */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                style={{
                  filter: hasClicked
                    ? 'drop-shadow(0 0 30px rgba(212,168,67,0.7))'
                    : 'drop-shadow(0 0 20px rgba(212,168,67,0.4))',
                  transition: 'filter 0.5s ease',
                }}
              >
                <circle cx="60" cy="60" r="50" fill="url(#secretMoonGrad)" />
                <circle cx="75" cy="45" r="35" fill="rgba(6,13,26,0.3)" />
                <circle cx="42" cy="48" r="6" fill="rgba(180,150,60,0.2)" />
                <circle cx="70" cy="75" r="8" fill="rgba(180,150,60,0.18)" />
                <circle cx="55" cy="65" r="4" fill="rgba(180,150,60,0.15)" />

                {/* Stars around moon */}
                {hasClicked && (
                  <>
                    <circle cx="20" cy="20" r="2" fill="#f0c96e" opacity="0.8" />
                    <circle cx="100" cy="15" r="1.5" fill="#f0c96e" opacity="0.7" />
                    <circle cx="110" cy="80" r="2" fill="#f0c96e" opacity="0.6" />
                    <circle cx="10" cy="90" r="1.5" fill="#f0c96e" opacity="0.7" />
                  </>
                )}

                <defs>
                  <radialGradient id="secretMoonGrad" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#fff8e1" />
                    <stop offset="40%" stopColor="#f0c96e" />
                    <stop offset="80%" stopColor="#d4a843" />
                    <stop offset="100%" stopColor="#b8860b" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Click indicator */}
              {!hasClicked && (
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '10px',
                    color: 'rgba(212,168,67,0.5)',
                    fontFamily: 'Lato, sans-serif',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ↓ click me
                </motion.div>
              )}
            </motion.button>
          </div>
        </FadeInSection>

        {/* Revealed message */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              className="secret-reveal"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                background: 'linear-gradient(135deg, rgba(212,168,67,0.06), rgba(45,106,79,0.08))',
                border: '1px solid rgba(212,168,67,0.2)',
                borderRadius: '16px',
                padding: 'clamp(28px, 6vw, 48px)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top glow line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)',
              }} />

              {/* Moon emoji */}
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>🌙</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p
                  className="font-body"
                  style={{
                    fontSize: 'clamp(0.88rem, 1.8vw, 1rem)',
                    color: 'rgba(248,244,232,0.6)',
                    lineHeight: 1.9,
                    fontWeight: 300,
                    fontStyle: 'italic',
                  }}
                >
                  "If you're reading this, it means you clicked the moon.
                </p>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)' }} />

                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                    color: '#e8dfc8',
                    lineHeight: 1.9,
                    fontStyle: 'italic',
                    fontWeight: 300,
                  }}
                >
                  The moon reminds me of something.
                  <br /><br />
                  It stays in the sky even when the night changes.
                </p>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)' }} />

                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                    color: '#f0c96e',
                    lineHeight: 1.9,
                    fontStyle: 'italic',
                    fontWeight: 300,
                  }}
                >
                  Just like some people stay in our hearts
                  <br />
                  even when life changes their role.
                </p>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)' }} />

                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                    color: '#e8dfc8',
                    lineHeight: 1.9,
                    fontStyle: 'italic',
                    fontWeight: 300,
                  }}
                >
                  You will always be someone
                  <br />
                  I'm grateful I met."
                </p>

                <div style={{ height: '8px' }} />

                <p
                  className="font-handwritten"
                  style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                    color: '#d4a843',
                    letterSpacing: '0.05em',
                  }}
                >
                  — Ayussh
                </p>
              </div>

              {/* Bottom glow line */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)',
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SecretMoonSection;
