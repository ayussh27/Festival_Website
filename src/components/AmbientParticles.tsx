import React, { useMemo } from 'react';

const AmbientParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 10 + Math.random() * 80,
      size: Math.random() * 4 + 2,
      dur: 6 + Math.random() * 8,
      del: Math.random() * 10,
      color: ['rgba(212,168,67,0.5)', 'rgba(82,183,136,0.4)', 'rgba(244,168,184,0.4)', 'rgba(240,201,110,0.4)'][i % 4],
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            '--dur': `${p.dur}s`,
            '--del': `${p.del}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default AmbientParticles;
