import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInSection from '../components/FadeInSection';

interface TimelineEntry {
  title: string;
  text: string;
  icon: string;
  color: string;
  side: 'left' | 'right';
}

const entries: TimelineEntry[] = [
  {
    title: "The Beginning",
    text: "Two strangers who started talking without knowing they were about to change each other's world.",
    icon: "🌱",
    color: 'rgba(82,183,136,0.9)',
    side: 'left',
  },
  {
    title: "The Laughter",
    text: "Inside jokes, random giggles, and conversations that made ordinary days unforgettable.",
    icon: "✨",
    color: 'rgba(244,168,184,0.9)',
    side: 'right',
  },
  {
    title: "The Adventures",
    text: "Beaches, food dates, silent walks, and moments that slowly became memories.",
    icon: "🌊",
    color: 'rgba(212,168,67,0.9)',
    side: 'left',
  },
  {
    title: "The Realisation",
    text: "Somewhere along the way we realised… this wasn't just time passing. This was love.",
    icon: "💛",
    color: 'rgba(240,201,110,1)',
    side: 'right',
  },
  {
    title: "The Change",
    text: "Life asked difficult questions and the future became uncertain.",
    icon: "🌙",
    color: 'rgba(150,170,220,0.8)',
    side: 'left',
  },
  {
    title: "Today",
    text: "We call ourselves friends…\nbut the respect, care, and love still quietly exist.",
    icon: "🕊️",
    color: 'rgba(82,183,136,0.9)',
    side: 'right',
  },
];

interface TimelineCardDesktopProps {
  entry: TimelineEntry;
  index: number;
}

const TimelineCardDesktop: React.FC<TimelineCardDesktopProps> = ({ entry, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isLeft = entry.side === 'left';

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        position: 'relative',
        marginBottom: '56px',
      }}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          width: 'calc(50% - 52px)',
          background: 'linear-gradient(135deg, rgba(45,106,79,0.12), rgba(13,33,55,0.65))',
          border: `1px solid ${entry.color.replace('0.9', '0.2').replace('1)', '0.25)')}`,
          backdropFilter: 'blur(12px)',
          borderRadius: '14px',
          padding: '28px 28px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${entry.color}, transparent)`,
        }} />

        {/* Number badge */}
        <div style={{
          position: 'absolute',
          top: '14px', right: '16px',
          fontSize: '11px',
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          color: entry.color,
          letterSpacing: '0.12em',
          opacity: 0.7,
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        <div style={{ fontSize: '26px', marginBottom: '10px' }}>{entry.icon}</div>
        <h3
          className="font-serif"
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            fontWeight: 400,
            color: '#f0c96e',
            marginBottom: '10px',
          }}
        >
          {entry.title}
        </h3>
        <p
          className="font-body"
          style={{
            fontSize: '0.9rem',
            color: 'rgba(248,244,232,0.65)',
            lineHeight: 1.85,
            whiteSpace: 'pre-line',
            fontWeight: 300,
          }}
        >
          {entry.text}
        </p>

        {/* Arrow pointer */}
        <div style={{
          position: 'absolute',
          top: '38px',
          [isLeft ? 'right' : 'left']: '-9px',
          width: 0, height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          [isLeft ? 'borderLeft' : 'borderRight']: `9px solid ${entry.color.replace('0.9', '0.18').replace('1)', '0.2)')}`,
        }} />
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, white 0%, ${entry.color} 60%, rgba(13,33,55,0.8) 100%)`,
          border: `2px solid ${entry.color}`,
          boxShadow: `0 0 25px ${entry.color.replace('0.9', '0.5').replace('1)', '0.5)')}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          zIndex: 3,
        }}
      >
        {entry.icon}
      </motion.div>
    </div>
  );
};

interface MobileCardProps {
  entry: TimelineEntry;
  index: number;
}

const MobileCard: React.FC<MobileCardProps> = ({ entry, index }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05 }}
      style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '28px',
        alignItems: 'flex-start',
      }}
    >
      {/* Left: icon dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
        <div style={{
          width: '44px', height: '44px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, white 0%, ${entry.color} 60%, rgba(13,33,55,0.8) 100%)`,
          border: `1.5px solid ${entry.color}`,
          boxShadow: `0 0 16px ${entry.color.replace('0.9', '0.4').replace('1)', '0.4)')}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px',
          flexShrink: 0,
        }}>
          {entry.icon}
        </div>
        {index < entries.length - 1 && (
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(180deg, rgba(212,168,67,0.25), transparent)',
          }} />
        )}
      </div>

      {/* Right: card */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, rgba(45,106,79,0.1), rgba(13,33,55,0.6))',
        border: `1px solid ${entry.color.replace('0.9', '0.18').replace('1)', '0.2)')}`,
        borderRadius: '12px',
        padding: '18px 18px 16px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '1.5px',
          background: `linear-gradient(90deg, ${entry.color}, transparent)`,
        }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <h3 className="font-serif" style={{ fontSize: '1.05rem', fontWeight: 400, color: '#f0c96e' }}>
            {entry.title}
          </h3>
          <span style={{ fontSize: '10px', color: entry.color, fontFamily: 'Cormorant Garamond, serif', opacity: 0.7, letterSpacing: '0.1em' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <p className="font-body" style={{ fontSize: '0.85rem', color: 'rgba(248,244,232,0.62)', lineHeight: 1.8, fontWeight: 300, whiteSpace: 'pre-line' }}>
          {entry.text}
        </p>
      </div>
    </motion.div>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section
      id="timeline"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(180deg, #060d1a 0%, #071510 40%, #0a1628 80%, #060d1a 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        className="islamic-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <FadeInSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p
              className="font-handwritten"
              style={{
                fontSize: '14px',
                letterSpacing: '0.3em',
                color: 'rgba(212,168,67,0.6)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              A little journey
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                fontWeight: 300,
                color: '#f8f4e8',
              }}
            >
              Our Little{' '}
              <span className="font-serif" style={{ color: '#f0c96e', fontStyle: 'italic' }}>
                Timeline
              </span>
            </h2>
            <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
          </div>
        </FadeInSection>

        {/* Desktop Timeline */}
        <div id="desktop-timeline" style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, transparent, rgba(212,168,67,0.25) 8%, rgba(212,168,67,0.25) 92%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {entries.map((entry, i) => (
            <TimelineCardDesktop key={i} entry={entry} index={i} />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div id="mobile-timeline" style={{ display: 'none' }}>
          {entries.map((entry, i) => (
            <MobileCard key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #desktop-timeline { display: none !important; }
          #mobile-timeline { display: block !important; }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
