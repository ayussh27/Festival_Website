import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FloatingLanterns from '../components/FloatingLanterns';

const MoonSVG: React.FC = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {/* Outer glow ring */}
    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(212,168,67,0.08)" strokeWidth="2" />
    <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(212,168,67,0.06)" strokeWidth="1" />
    {/* Moon body */}
    <circle cx="100" cy="100" r="65" fill="url(#moonGrad)" />
    {/* Craters */}
    <circle cx="75" cy="80" r="8" fill="rgba(180,150,60,0.25)" />
    <circle cx="120" cy="115" r="12" fill="rgba(180,150,60,0.2)" />
    <circle cx="90" cy="125" r="5" fill="rgba(180,150,60,0.18)" />
    <circle cx="130" cy="80" r="6" fill="rgba(180,150,60,0.22)" />
    <circle cx="60" cy="115" r="7" fill="rgba(180,150,60,0.15)" />
    {/* Crescent shadow effect */}
    <circle cx="120" cy="90" r="58" fill="rgba(6,13,26,0.35)" />
    <defs>
      <radialGradient id="moonGrad" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#fff8e1" />
        <stop offset="40%" stopColor="#f0c96e" />
        <stop offset="75%" stopColor="#d4a843" />
        <stop offset="100%" stopColor="#b8860b" />
      </radialGradient>
    </defs>
  </svg>
);

const lines = [
  "Some stories change their form…",
  "but the love inside them never disappears.",
];

const HeroSection: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showSmall, setShowSmall] = useState(false);
  const [showSig, setShowSig] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), 1800 + i * 1200)
      );
    });
    timers.push(setTimeout(() => setShowSmall(true), 4500));
    timers.push(setTimeout(() => setShowSig(true), 5800));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 60% 20%, rgba(212,168,67,0.07) 0%, transparent 60%), linear-gradient(180deg, #060d1a 0%, #0a1628 50%, #0d2137 100%)',
      }}
    >
      {/* Islamic geometric pattern overlay */}
      <div
        className="islamic-overlay geometric-pattern"
        style={{
          position: 'absolute', inset: 0,
          opacity: 0.6, pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* Radial moon glow bg */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <FloatingLanterns />

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="moon-glow"
        style={{
          position: 'absolute',
          top: '6%',
          right: '12%',
          width: 'clamp(100px, 16vw, 200px)',
          height: 'clamp(100px, 16vw, 200px)',
          zIndex: 3,
        }}
      >
        <MoonSVG />
      </motion.div>

      {/* Stars particles around moon */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.8 }}
          style={{
            position: 'absolute',
            top: `${10 + i * 4}%`,
            right: `${8 + i * 3}%`,
            width: i % 2 === 0 ? '3px' : '2px',
            height: i % 2 === 0 ? '3px' : '2px',
            borderRadius: '50%',
            background: '#f0c96e',
            zIndex: 3,
          }}
        />
      ))}

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '800px',
        }}
      >
        {/* Eid Mubarak headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p
            className="font-handwritten"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              color: 'rgba(212,168,67,0.7)',
              letterSpacing: '0.25em',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            A Gift From Ayussh
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '8px',
              color: '#f8f4e8',
            }}
          >
            Eid Mubarak,
          </h1>
          <h1
            className="font-serif gradient-gold"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: '16px',
              display: 'inline-block',
            }}
          >
            Sana 🌙
          </h1>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #d4a843, transparent)',
            margin: '24px auto',
            maxWidth: '300px',
          }}
        />

        {/* Animated subtitle lines */}
        <div style={{ minHeight: '80px', marginBottom: '24px' }}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={visibleLines > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="font-serif"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#e8dfc8',
                lineHeight: 1.7,
                marginBottom: '4px',
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Small desc */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showSmall ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{ marginBottom: '36px' }}
        >
          <p
            className="font-body"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              color: 'rgba(248,244,232,0.55)',
              lineHeight: 1.9,
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            This is not just a website.
            <br />
            This is a small place where our memories still breathe.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showSig ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
        >
          <p
            className="font-handwritten"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: '#d4a843',
              letterSpacing: '0.05em',
            }}
          >
            — Ayussh
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5, duration: 1 }}
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <p
          className="font-body"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(212,168,67,0.5)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </p>
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <rect x="8" y="0" width="4" height="4" rx="2" fill="rgba(212,168,67,0.5)" />
          <line x1="10" y1="4" x2="10" y2="20" stroke="rgba(212,168,67,0.3)" strokeWidth="1" />
          <path d="M5 18 L10 24 L15 18" stroke="rgba(212,168,67,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '200px',
        background: 'linear-gradient(transparent, #060d1a)',
        zIndex: 3,
        pointerEvents: 'none',
      }} />
    </section>
  );
};

export default HeroSection;
