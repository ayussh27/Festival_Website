import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Story', href: '#our-story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gratitude', href: '#gratitude' },
  { label: 'Letter', href: '#letter' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '16px 32px',
          background: scrolled
            ? 'rgba(6,13,26,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(212,168,67,0.1)'
            : 'none',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            className="font-handwritten"
            style={{
              fontSize: '22px',
              color: '#d4a843',
              letterSpacing: '0.05em',
            }}
          >
            🌙 Sana
          </span>
        </button>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(248,244,232,0.55)',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                transition: 'color 0.3s ease',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.color = '#d4a843';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.color = 'rgba(248,244,232,0.55)';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#d4a843',
            padding: '8px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ width: '22px', height: '1.5px', background: '#d4a843', borderRadius: '2px' }}
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: '22px', height: '1.5px', background: '#d4a843', borderRadius: '2px' }}
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ width: '22px', height: '1.5px', background: '#d4a843', borderRadius: '2px' }}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '60px', left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(6,13,26,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(212,168,67,0.1)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,244,232,0.7)',
                  fontFamily: 'Lato, sans-serif',
                  textAlign: 'left',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(212,168,67,0.08)',
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navigation;
