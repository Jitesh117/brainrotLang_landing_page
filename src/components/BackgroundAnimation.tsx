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
    for (let i = 0; i < 15; i++) {
      initialTexts.push({
        id: i,
        text: brainrotSlangs[Math.floor(Math.random() * brainrotSlangs.length)],
        x: Math.random() * (window.innerWidth + 200) - 100,
        y: Math.random() * (window.innerHeight + 200) - 100,
        vx: (Math.random() * 1 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 1 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
        opacity: Math.random() * 0.1 + 0.05,
        size: Math.random() * 0.5 + 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 1 - 0.5) * 0.2,
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

    const intervalId = setInterval(animate, 50);

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
      {/* Subway Surfer video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-20"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/subway-surfer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
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
            color: 'rgba(236, 72, 153, 0.3)',
            fontWeight: '500',
          }}
        >
          {text.text}
        </div>
      ))}
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/60 pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;