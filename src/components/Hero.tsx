import { Github, Play, Sparkles, ArrowRight, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    'vibe main() {\n  println!("Sup Nerds!, it\'s brainrot time!");\n  yeet x = 42;\n  fr x.is_based() {\n    x.rizz();\n  }\n}',
    "class SkullEmoji {\n  constructor(vibe) {\n    this.energy = vibe.mid ? 0 : 100;\n  }\n  \n  slay() {\n    return this.energy > 50;\n  }\n}",
    'vibe no_cap(truth):\n  fr truth.is_bussin():\n    return "fr fr"\n  else:\n    return "cap detected 🧢"',
    'yeet rizz_level = 9000;\nfr (rizz_level > 8000) {\n  console.log("SHEESH! 🔥");\n  touch_grass();\n} sus {\n  console.log("mid energy 💀");\n}',
  ];

  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let index = 0;

    const typeText = () => {
      if (index < snippet.length) {
        setDisplayText(snippet.substring(0, index + 1));
        index++;
        setTimeout(typeText, 35);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText("");
            setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
            setIsTyping(true);
          }, 1500);
        }, 3000);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentSnippet, isTyping]);

  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
          <Star className="w-4 h-4 mr-2" />
          The most cursed language ever created
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>

        {/* Hero Title */}
        <div className="mb-10">
          <h1 className="mb-6 text-5xl font-bold sm:text-7xl lg:text-8xl leading-tight">
            <span className="text-gradient font-mono tracking-tight">Brainrot</span>
            <br />
            <span className="text-slate-100 font-light">Programming Language</span>
          </h1>
          <p className="mb-4 text-2xl sm:text-3xl text-slate-300 font-medium max-w-4xl mx-auto">
            Unleash the <span className="text-pink-400">Brainrot</span>.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A language so cursed, it's{" "}
            <span className="text-pink-400 font-medium">beautiful</span>.
            Write code that's both functional and absolutely unhinged. No cap, fr fr.
          </p>
        </div>

        {/* Code Animation - Larger and more prominent */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-400 font-mono">
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span className="text-pink-400 font-medium">brainrot.exe</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-left">
              <pre className="font-mono text-base text-slate-100 whitespace-pre-wrap sm:text-lg leading-relaxed">
                <code>{displayText}</code>
                <span className="text-pink-500 animate-pulse text-xl">█</span>
              </pre>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Enhanced */}
        <div className="flex flex-col items-center justify-center gap-6 mb-20 sm:flex-row">
          <button className="group relative overflow-hidden bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/25 hover:-translate-y-1 text-lg">
            <div className="flex items-center space-x-3">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              <span>Try in Editor</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-lg">
            <div className="flex items-center space-x-3">
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              <span>View on GitHub</span>
            </div>
          </button>
        </div>

        {/* Stats - Enhanced with better visual hierarchy */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="card card-hover p-8 group">
            <div className="text-4xl font-bold text-pink-500 mb-3 group-hover:scale-110 transition-transform duration-200">1337+</div>
            <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Based Lines</div>
          </div>
          <div className="card card-hover p-8 group">
            <div className="text-4xl font-bold text-pink-500 mb-3 group-hover:scale-110 transition-transform duration-200">420+</div>
            <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">No Cap Functions</div>
          </div>
          <div className="card card-hover p-8 group">
            <div className="text-4xl font-bold text-pink-500 mb-3 group-hover:scale-110 transition-transform duration-200">69+</div>
            <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Rizz Operators</div>
          </div>
          <div className="card card-hover p-8 group">
            <div className="text-4xl font-bold text-pink-500 mb-3 group-hover:scale-110 transition-transform duration-200">∞</div>
            <div className="text-slate-400 font-mono text-sm uppercase tracking-wider">Brainrot Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;