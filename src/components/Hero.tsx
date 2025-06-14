import { Github, Play, Sparkles, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    'fn main() {\n  println!("Hello, brainrot!");\n  let x = 42;\n  if x.is_based() {\n    x.rizz();\n  }\n}',
    "class SkullEmoji {\n  constructor(vibe) {\n    this.energy = vibe.mid ? 0 : 100;\n  }\n  \n  slay() {\n    return this.energy > 50;\n  }\n}",
    'def no_cap(truth):\n  if truth.is_bussin():\n    return "fr fr"\n  else:\n    return "cap detected 🧢"',
    'let rizz_level = 9000;\nif (rizz_level > 8000) {\n  console.log("SHEESH! 🔥");\n  touch_grass();\n} else {\n  console.log("mid energy 💀");\n}',
  ];

  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let index = 0;

    const typeText = () => {
      if (index < snippet.length) {
        setDisplayText(snippet.substring(0, index + 1));
        index++;
        setTimeout(typeText, 40); // Constant typing speed
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText("");
            setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
            setIsTyping(true);
          }, 1000);
        }, 2000);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentSnippet, isTyping]);

  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Chaotic Hero Title */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold sm:text-6xl lg:text-8xl">
            <span className="font-mono text-pink-400">Brainrot</span>
            <br />
            <span className="text-white text-shadow">Programming Language</span>
          </h1>
          <p className="mb-2 font-mono text-xl sm:text-3xl text-cyan-400 neon-glow">
            Unleash the Brainrot.
          </p>
          <p className="font-mono text-lg text-gray-300">
            A language so cursed, it's{" "}
            <span className="text-pink-400">beautiful</span>.
          </p>
        </div>

        {/* Chaotic Code Animation */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative p-6 overflow-hidden border-2 shadow-2xl bg-gray-900/70 backdrop-blur-sm rounded-xl border-pink-500/50 neon-border">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 animate-pulse"></div>
            </div>

            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 font-mono text-sm text-pink-400">
                <Sparkles className="w-4 h-4" />
                <span>brainrot.exe</span>
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10 text-left">
              <pre className="font-mono text-sm text-gray-100 whitespace-pre-wrap sm:text-base">
                <code>{displayText}</code>
                <span className="text-pink-400 animate-pulse">█</span>
              </pre>
            </div>
          </div>
        </div>

        {/* Chaotic CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-6 mb-12 sm:flex-row">
          <button className="relative px-10 py-5 font-mono text-lg font-bold text-white transition-all duration-300 transform bg-pink-500 group hover:bg-pink-600 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-2">
            <div className="flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Try in Editor</span>
            </div>
            <div className="absolute w-3 h-3 rounded-full -top-1 -right-1 bg-cyan-400"></div>
          </button>

          <button className="px-10 py-5 font-mono text-lg font-bold transition-all duration-300 transform group border-3 border-cyan-400 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-2">
            <div className="flex items-center space-x-3">
              <Github className="w-6 h-6" />
              <span>View on GitHub</span>
            </div>
          </button>
        </div>

        {/* Chaotic Stats */}
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          <div className="transition-transform duration-300 transform hover:scale-110">
            <div className="font-mono text-3xl font-bold text-pink-400">
              1337+
            </div>
            <div className="font-mono text-gray-300">Based Lines</div>
          </div>
          <div className="transition-transform duration-300 transform hover:scale-110">
            <div className="font-mono text-3xl font-bold text-cyan-400">
              420+
            </div>
            <div className="font-mono text-gray-300">No Cap Functions</div>
          </div>
          <div className="transition-transform duration-300 transform hover:scale-110">
            <div className="font-mono text-3xl font-bold text-green-400">
              69+
            </div>
            <div className="font-mono text-gray-300">Rizz Operators</div>
          </div>
          <div className="transition-transform duration-300 transform hover:scale-110">
            <div className="font-mono text-3xl font-bold text-yellow-400">
              ∞
            </div>
            <div className="font-mono text-gray-300">Brainrot Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
