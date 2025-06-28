import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Initialize subtle floating texts
    const initialTexts: FloatingText[] = [];
    for (let i = 0; i < 12; i++) {
      initialTexts.push({
        id: i,
        text: brainrotSlangs[Math.floor(Math.random() * brainrotSlangs.length)],
        x: Math.random() * (window.innerWidth + 200) - 100,
        y: Math.random() * (window.innerHeight + 200) - 100,
        vx: (Math.random() * 0.8 + 0.3) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 0.8 + 0.3) * (Math.random() > 0.5 ? 1 : -1),
        opacity: Math.random() * 0.08 + 0.03,
        size: Math.random() * 0.4 + 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 1 - 0.5) * 0.15,
      });
    }
    setFloatingTexts(initialTexts);

    // Subtle animation loop
    const animate = () => {
      setFloatingTexts(prevTexts =>
        prevTexts.map(text => {
          let newX = text.x + text.vx;
          let newY = text.y + text.vy;
          let newRotation = text.rotation + text.rotationSpeed;

          // Wrap around screen
          if (newX > window.innerWidth + 100) {
            newX = -100;
          } else if (newX < -100) {
            newX = window.innerWidth + 100;
          }

          if (newY > window.innerHeight + 100) {
            newY = -100;
          } else if (newY < -100) {
            newY = window.innerHeight + 100;
          }

          return {
            ...text,
            x: newX,
            y: newY,
            rotation: newRotation,
          };
        })
      );
    };

    const intervalId = setInterval(animate, 60);

    const handleResize = () => {
      setFloatingTexts(prevTexts =>
        prevTexts.map(text => ({
          ...text,
          x: Math.min(text.x, window.innerWidth + 100),
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
      {/* Subway Surfer video background - more visible */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/subway-surfer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/50 to-slate-950/70"></div>
      
      {/* Ultra subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Floating subtle text */}
      {floatingTexts.map((text) => (
        <div
          key={text.id}
          className="absolute font-mono select-none"
          style={{
            left: `${text.x}px`,
            top: `${text.y}px`,
            opacity: text.opacity,
            fontSize: `${text.size}rem`,
            transform: `translateZ(0) rotate(${text.rotation}deg)`,
            color: 'rgba(236, 72, 153, 0.4)',
            fontWeight: '400',
          }}
        >
          {text.text}
        </div>
      ))}
      
      {/* Refined overlay for perfect readability */}
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;