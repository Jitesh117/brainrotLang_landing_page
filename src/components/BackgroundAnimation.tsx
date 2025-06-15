import React, { useEffect, useState } from 'react';

interface FloatingText {
  id: number;
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

const BackgroundAnimation: React.FC = () => {
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);

  const brainrotSlangs = [
    'based', 'skull', 'rizz', 'mid', 'no cap', 'bussin', 'periodt', 'slay', 'fr fr',
    'touch grass', 'vibes', 'fire', 'cap', 'bet', 'say less', 'main character',
    'understood the assignment', 'living rent free', 'hits different', 'sending me',
    'not me', 'the way', 'i cant', 'bestie', 'babygirl', 'pov', 'its giving',
    'gatekeep gaslight girlboss', 'chefs kiss', 'caught in 4k', 'respectfully',
    'lowkey', 'highkey', 'finna', 'sheesh', 'valid', 'vibe check', 'energy',
    'aura', 'ohio', 'sigma', 'alpha', 'beta', 'gigachad', 'cringe', 'sus',
    'bruh', 'yeet', 'stan', 'simp', 'karen', 'boomer', 'zoomer', 'millennial',
    'gen z', 'tiktok', 'instagram', 'twitter', 'discord', 'reddit', 'youtube'
  ];

  const colors = [
    'rgba(255, 20, 147, 0.6)',   // Deep pink
    'rgba(255, 0, 255, 0.5)',    // Magenta
    'rgba(255, 105, 180, 0.4)',  // Hot pink
    'rgba(199, 21, 133, 0.5)',   // Medium violet red
    'rgba(138, 43, 226, 0.4)',   // Blue violet
    'rgba(255, 69, 0, 0.5)',     // Red orange
    'rgba(0, 255, 255, 0.4)',    // Cyan
    'rgba(50, 205, 50, 0.4)',    // Lime green
  ];

  useEffect(() => {
    // Initialize chaotic floating texts
    const initialTexts: FloatingText[] = [];
    for (let i = 0; i < 40; i++) {
      initialTexts.push({
        id: i,
        text: brainrotSlangs[Math.floor(Math.random() * brainrotSlangs.length)],
        x: Math.random() * (window.innerWidth + 400) - 200,
        y: Math.random() * (window.innerHeight + 200) - 100,
        vx: (Math.random() * 3 + 1) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
        opacity: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 1.5, // Even larger sizes
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 2 - 1) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setFloatingTexts(initialTexts);

    // Chaotic animation loop
    const animate = () => {
      setFloatingTexts(prevTexts =>
        prevTexts.map(text => {
          let newX = text.x + text.vx;
          let newY = text.y + text.vy;
          let newRotation = text.rotation + text.rotationSpeed;

          // Chaotic wrapping with random repositioning
          if (newX > window.innerWidth + 200) {
            newX = -300;
            newY = Math.random() * window.innerHeight;
          } else if (newX < -300) {
            newX = window.innerWidth + 200;
            newY = Math.random() * window.innerHeight;
          }

          if (newY > window.innerHeight + 100) {
            newY = -150;
            newX = Math.random() * window.innerWidth;
          } else if (newY < -150) {
            newY = window.innerHeight + 100;
            newX = Math.random() * window.innerWidth;
          }

          // Occasionally change direction for chaos
          let newVx = text.vx;
          let newVy = text.vy;
          if (Math.random() < 0.001) {
            newVx = (Math.random() * 3 + 1) * (Math.random() > 0.5 ? 1 : -1);
            newVy = (Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
          }

          return {
            ...text,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: newRotation,
          };
        })
      );
    };

    const intervalId = setInterval(animate, 20); // Even faster for more chaos

    const handleResize = () => {
      setFloatingTexts(prevTexts =>
        prevTexts.map(text => ({
          ...text,
          x: Math.min(text.x, window.innerWidth + 200),
          y: Math.min(text.y, window.innerHeight + 100),
        }))
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subway Surfer video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/subway-surfer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Chaotic mesh background */}
      <div className="absolute inset-0 mesh-bg"></div>
      <div className="absolute inset-0 mesh-overlay"></div>
      
      {/* Floating chaotic text */}
      {floatingTexts.map((text) => (
        <div
          key={text.id}
          className="absolute font-bold select-none"
          style={{
            left: `${text.x}px`,
            top: `${text.y}px`,
            opacity: text.opacity,
            fontSize: `${text.size}rem`,
            fontFamily: 'JetBrains Mono, monospace',
            transform: `translateZ(0) rotate(${text.rotation}deg)`,
            color: text.color,
            filter: 'blur(0.2px)',
            textShadow: `0 0 10px ${text.color}, 0 0 20px ${text.color}`,
            fontWeight: Math.random() > 0.5 ? '700' : '400',
          }}
        >
          {text.text}
        </div>
      ))}
      
      {/* Additional chaos overlay */}
      <div className="absolute inset-0 bg-gray-950/40 pointer-events-none" />
      
      {/* Random floating geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-pink-500 rotate-45 opacity-20 animate-spin"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-cyan-500 opacity-10 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-green-500 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-2/3 right-1/3 w-24 h-24 border-2 border-yellow-500 opacity-10 animate-spin"></div>
    </div>
  );
};

export default BackgroundAnimation;