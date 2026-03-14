import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInSection from '../components/FadeInSection';

interface GratitudeItem {
  number: string;
  title: string;
  text: string;
  icon: string;
  color: string;
}

const items: GratitudeItem[] = [
  {
    number: "01",
    title: "Your Kind Heart",
    text: "The way you care for people around you… it always amazed me. Your softness is rare in a world that is often too harsh.",
    icon: "🌸",
    color: 'rgba(244,168,184,0.8)',
  },
  {
    number: "02",
    title: "The Strength You Carry",
    text: "Even when life tested you, you kept moving forward. Watching your courage taught me more than you realise.",
    icon: "🌿",
    color: 'rgba(82,183,136,0.8)',
  },
  {
    number: "03",
    title: "The Comfort You Gave Me",
    text: "There were days when my mind felt heavy, and somehow just talking to you made everything feel lighter.",
    icon: "🕊️",
    color: 'rgba(212,168,67,0.8)',
  },
  {
    number: "04",
    title: "The Way You Made Ordinary Days Special",
    text: "A simple walk, a random conversation, or sitting quietly together somehow turned into memories I will never forget.",
    icon: "✨",
    color: 'rgba(240,201,110,0.9)',
  },
  {
    number: "05",
    title: "Your Smile",
    text: "Your smile always had a strange power. It could fix a bad day without even trying.",
    icon: "🌙",
    color: 'rgba(244,168,184,0.9)',
  },
  {
    number: "06",
    title: "The Memories We Created",
    text: "From our small adventures to our quiet moments, every memory feels like a small treasure I will always keep.",
    icon: "📷",
    color: 'rgba(150,200,170,0.8)',
  },
  {
    number: "07",
    title: "The Trust We Once Shared",
    text: "For a time in life, we trusted each other with our feelings, our fears, and our dreams. That kind of connection is rare.",
    icon: "🔑",
    color: 'rgba(212,168,67,0.9)',
  },
  {
    number: "08",
    title: "The Way You Believed In Me",
    text: "Even when my life felt uncertain, you still saw something in me worth believing in.",
    icon: "⭐",
    color: 'rgba(240,201,110,0.9)',
  },
  {
    number: "09",
    title: "The Love We Experienced",
    text: "What we shared was real. And real love, even if it changes form, never truly disappears.",
    icon: "💛",
    color: 'rgba(244,168,184,0.8)',
  },
  {
    number: "10",
    title: "Simply… You",
    text: "More than anything else, I'm grateful that life allowed our paths to cross.\nBecause meeting you changed me in ways I will always carry.",
    icon: "🌺",
    color: 'rgba(82,183,136,0.9)',
  },
];

interface GratitudeCardProps {
  item: GratitudeItem;
  index: number;
}

const GratitudeCard: React.FC<GratitudeCardProps> = ({ item, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
      className="gratitude-card"
      style={{
        borderRadius: '16px',
        padding: '28px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
      }} />

      {/* Number badge */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        fontSize: '11px',
        fontFamily: 'Cormorant Garamond, serif',
        fontWeight: 300,
        color: item.color,
        letterSpacing: '0.15em',
        opacity: 0.7,
      }}>
        {item.number}
      </div>

      {/* Icon */}
      <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>

      {/* Title */}
      <h3
        className="font-serif"
        style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
          fontWeight: 400,
          color: '#f0c96e',
          marginBottom: '10px',
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>

      {/* Text */}
      <p
        className="font-body"
        style={{
          fontSize: 'clamp(0.82rem, 1.5vw, 0.92rem)',
          color: 'rgba(248,244,232,0.65)',
          lineHeight: 1.85,
          fontWeight: 300,
          whiteSpace: 'pre-line',
        }}
      >
        {item.text}
      </p>
    </motion.div>
  );
};

const GratitudeSection: React.FC = () => {
  return (
    <section
      id="gratitude"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(180deg, #060d1a 0%, #0a1628 30%, #071510 70%, #060d1a 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        className="islamic-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <FadeInSection delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              className="font-handwritten"
              style={{
                fontSize: '14px',
                letterSpacing: '0.3em',
                color: 'rgba(244,168,184,0.7)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              With All My Heart
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3.8rem)',
                fontWeight: 300,
                color: '#f8f4e8',
                lineHeight: 1.2,
              }}
            >
              10 Things I Will Always Be
              <br />
              <span style={{ color: '#f0c96e', fontStyle: 'italic' }}>Grateful For About You</span>
            </h2>
            <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
          </div>
        </FadeInSection>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))',
          gap: '20px',
          marginBottom: '72px',
        }}>
          {items.map((item, i) => (
            <GratitudeCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Closing line */}
        <FadeInSection delay={0.2} direction="none">
          <div style={{
            textAlign: 'center',
            padding: '40px 24px',
            background: 'linear-gradient(135deg, rgba(212,168,67,0.05), rgba(45,106,79,0.08))',
            border: '1px solid rgba(212,168,67,0.12)',
            borderRadius: '16px',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #d4a843, transparent)',
              }} />
            </div>
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(248,244,232,0.75)',
                lineHeight: 1.9,
              }}
            >
              "Some people become memories.
              <br />
              <span style={{ color: '#f0c96e' }}>You became a part of my story."</span>
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default GratitudeSection;
