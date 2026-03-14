import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';
import { Play, Pause, Mic, Volume2 } from 'lucide-react';

const VoiceNoteSection: React.FC = () => {
  const audioSrc = "public/audio/eid-message.mp3"; // your static audio file
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [waveform, setWaveform] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    setWaveform(Array.from({ length: 40 }, () => Math.random() * 0.8 + 0.2));
  }, []);

  const updateProgress = () => {
    if (!audioRef.current) return;

    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 1;

    setCurrentTime(cur);
    setProgress((cur / dur) * 100);

    if (!audioRef.current.paused) {
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      cancelAnimationFrame(animFrameRef.current);
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      animFrameRef.current = requestAnimationFrame(updateProgress);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;

    audioRef.current.currentTime = pct * (audioRef.current.duration || 0);
    setProgress(pct * 100);
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  return (
    <section
      id="voice"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(180deg, #060d1a 0%, #071510 50%, #060d1a 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        className="geometric-pattern"
        style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

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
              For Your Ears
            </p>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 300,
                color: '#f8f4e8',
              }}
            >
              A Message I Wanted
              <br />
              <span style={{ color: '#f0c96e', fontStyle: 'italic' }}>
                You To Hear
              </span>
            </h2>

            <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '200px' }} />
          </div>
        </FadeInSection>

        {/* Player */}
        <FadeInSection delay={0.2} direction="up">
          <div
            className="audio-player player-glow"
            style={{
              borderRadius: '20px',
              padding: '36px 32px',
              textAlign: 'center',
            }}
          >

            {/* Mic Icon */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
              <motion.div
                animate={isPlaying ? { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] } : { scale: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(82,183,136,0.2), rgba(45,106,79,0.3))',
                  border: '1px solid rgba(82,183,136,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mic size={28} color="#52b788" />
              </motion.div>
            </div>

            {/* Waveform */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                height: '48px',
                marginBottom: '24px',
                cursor: 'pointer',
              }}
              onClick={handleSeek}
            >
              {waveform.map((h, i) => {
                const barProgress = (i / waveform.length) * 100;
                const isPast = barProgress <= progress;

                return (
                  <motion.div
                    key={i}
                    animate={isPlaying && isPast
                      ? { height: [`${h * 100}%`, `${Math.random() * 60 + 40}%`, `${h * 100}%`] }
                      : {}}
                    transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.02 }}
                    style={{
                      width: '4px',
                      height: `${h * 100}%`,
                      borderRadius: '2px',
                      background: isPast
                        ? 'linear-gradient(180deg, #52b788, #2d6a4f)'
                        : 'rgba(82,183,136,0.2)',
                      minHeight: '4px',
                    }}
                  />
                );
              })}
            </div>

            {/* Time */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(82,183,136,0.6)' }}>
                {formatTime(currentTime)}
              </span>

              <span style={{ fontSize: '12px', color: 'rgba(82,183,136,0.6)' }}>
                {formatTime(duration)}
              </span>
            </div>

            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: 'none',
                background: 'linear-gradient(135deg, #52b788, #2d6a4f)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 0 20px rgba(82,183,136,0.4)',
              }}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>

            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontStyle: 'italic',
                color: 'rgba(248,244,232,0.5)',
                lineHeight: 1.7,
              }}
            >
              "Some feelings are easier spoken than written."
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
              <Volume2 size={14} color="rgba(82,183,136,0.4)" />
              <p style={{ fontSize: '11px', color: 'rgba(82,183,136,0.4)', letterSpacing: '0.1em' }}>
                A voice note from Ayussh
              </p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={audioSrc}
            onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
            onEnded={handleEnded}
          />
        </FadeInSection>
      </div>
    </section>
  );
};

export default VoiceNoteSection;