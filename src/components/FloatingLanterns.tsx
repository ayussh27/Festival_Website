import React, { useMemo } from 'react';

interface Lantern {
  id: number;
  x: number;
  duration: number;
  delay: number;
  scale: number;
  color: string;
}

const LanternSVG: React.FC<{ color: string; scale: number }> = ({ color, scale }) => (
  <svg
    width={40 * scale}
    height={60 * scale}
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: `drop-shadow(0 0 ${8 * scale}px ${color})` }}
  >
    {/* String top */}
    <line x1="20" y1="0" x2="20" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Lantern body */}
    <ellipse cx="20" cy="9" rx="6" ry="3" fill={color} opacity="0.8" />
    <path d="M8 12 Q6 30 8 44 Q14 50 20 50 Q26 50 32 44 Q34 30 32 12 Z" fill={color} opacity="0.75" />
    {/* Ribs */}
    <path d="M8 12 Q20 18 32 12" stroke={color} strokeWidth="0.8" opacity="0.6" fill="none" />
    <path d="M7 22 Q20 28 33 22" stroke={color} strokeWidth="0.8" opacity="0.5" fill="none" />
    <path d="M7 33 Q20 38 33 33" stroke={color} strokeWidth="0.8" opacity="0.5" fill="none" />
    <path d="M8 43 Q20 47 32 43" stroke={color} strokeWidth="0.8" opacity="0.5" fill="none" />
    {/* Bottom */}
    <ellipse cx="20" cy="50" rx="6" ry="2.5" fill={color} opacity="0.8" />
    {/* Inner glow */}
    <ellipse cx="20" cy="30" rx="8" ry="12" fill="white" opacity="0.15" />
    {/* Flame / glow at bottom */}
    <ellipse cx="20" cy="54" rx="3" ry="5" fill="#ffd580" opacity="0.7" />
    <ellipse cx="20" cy="56" rx="2" ry="3" fill="#fff" opacity="0.5" />
    {/* Tassel */}
    <line x1="18" y1="52" x2="17" y2="60" stroke={color} strokeWidth="1" opacity="0.6" strokeLinecap="round" />
    <line x1="20" y1="52" x2="20" y2="60" stroke={color} strokeWidth="1" opacity="0.6" strokeLinecap="round" />
    <line x1="22" y1="52" x2="23" y2="60" stroke={color} strokeWidth="1" opacity="0.6" strokeLinecap="round" />
  </svg>
);

const FloatingLanterns: React.FC = () => {
  const lanterns: Lantern[] = useMemo(() => {
    const colors = [
      'rgba(212,168,67,0.9)',
      'rgba(244,168,184,0.85)',
      'rgba(82,183,136,0.85)',
      'rgba(240,201,110,0.9)',
      'rgba(255,200,120,0.85)',
    ];
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 5 + (i * 12) + (Math.random() * 8 - 4),
      duration: 16 + Math.random() * 10,
      delay: i * 2.5 + Math.random() * 3,
      scale: 0.7 + Math.random() * 0.6,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="lantern"
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: `${lantern.x}%`,
            '--duration': `${lantern.duration}s`,
            '--delay': `${lantern.delay}s`,
          } as React.CSSProperties}
        >
          <LanternSVG color={lantern.color} scale={lantern.scale} />
        </div>
      ))}
    </div>
  );
};

export default FloatingLanterns;
