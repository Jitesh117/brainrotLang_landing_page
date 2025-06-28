import { Github, Play, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    'vibe main() {\n  println!("Sup Nerds!, it\'s brainrot time!");\n  yeet x = 42;\n  fr x.is_based() {\n    x.rizz();\n  }\n}',
    "class SkullEmoji {\n  constructor(vibe) {\n    this.energy = vibe.mid ? 0 : 100;\n  }\n  \n  slay() {\n    slay this.energy > 50;\n  }\n}",
    'vibe no_cap(truth):\n  fr truth.is_bussin():\n    slay "fr fr"\n  else:\n    slay "cap detected 🧢"',
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
        setTimeout(typeText, 40);
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
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl lg:text-7xl">
            <span className="text-gradient font-mono">Brainrot</span>
            <br />
            <span className="text-slate-100">Programming Language</span>
          </h1>
          <p className="mb-3 text-xl sm:text-2xl text-slate-300 font-medium">
            Unleash the Brainrot.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A language so cursed, it's{" "}
            <span className="text-pink-400 font-medium">beautiful</span>.
            Write code that's both functional and absolutely unhinged.
          </p>
        </div>

        {/* Code Animation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400 font-mono">
                <Sparkles className="w-4 h-4" />
                <span>brainrot.exe</span>
              </div>
            </div>
            <div className="text-left">
              <pre className="font-mono text-sm text-slate-100 whitespace-pre-wrap sm:text-base">
                <code>{displayText}</code>
                <span className="text-pink-500 animate-pulse">█</span>
              </pre>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
          <button className="btn-primary flex items-center space-x-2 text-lg">
            <Play className="w-5 h-5" />
            <span>Try in Editor</span>
          </button>

          <button className="btn-secondary flex items-center space-x-2 text-lg">
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          <div className="card card-hover p-6">
            <div className="text-3xl font-bold text-pink-500 mb-2">1337+</div>
            <div className="text-slate-400 font-mono text-sm">Based Lines</div>
          </div>
          <div className="card card-hover p-6">
            <div className="text-3xl font-bold text-pink-500 mb-2">420+</div>
            <div className="text-slate-400 font-mono text-sm">No Cap Functions</div>
          </div>
          <div className="card card-hover p-6">
            <div className="text-3xl font-bold text-pink-500 mb-2">69+</div>
            <div className="text-slate-400 font-mono text-sm">Rizz Operators</div>
          </div>
          <div className="card card-hover p-6">
            <div className="text-3xl font-bold text-pink-500 mb-2">∞</div>
            <div className="text-slate-400 font-mono text-sm">Brainrot Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;