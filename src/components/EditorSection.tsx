import Editor from "@monaco-editor/react";
import {
  Code,
  Copy,
  Cpu,
  Download,
  Play,
  Settings,
  Terminal,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const EditorSection: React.FC = () => {
  const [code, setCode] = useState(`// Welcome to Brainrot! 🧠💀
fn main() {
    let vibe = "immaculate";
    let energy = 100;
    
    if vibe.is_bussin() {
        println!("No cap, this is fire! 🔥");
        energy.rizz_up();
    } else {
        println!("Mid energy detected 💀");
        energy.touch_grass();
    }
    
    // Let's get this bread fr fr
    let success = energy.slay();
    success.periodt();
    
    // Ohio moment
    if energy > 9000 {
        println!("SHEESH! That's some sigma energy! 🗿");
    }
}

// Custom trait for maximum brainrot
trait Rizz {
    fn is_bussin(&self) -> bool;
    fn slay(&self) -> bool;
    fn periodt(&self);
    fn touch_grass(&self);
}

impl Rizz for i32 {
    fn is_bussin(&self) -> bool {
        *self > 50 // no cap
    }
    
    fn slay(&self) -> bool {
        *self >= 100 // periodt
    }
    
    fn periodt(&self) {
        println!("And that's on periodt! ✨");
    }
    
    fn touch_grass(&self) {
        println!("Time to touch some grass bestie 🌱");
    }
}`);

  const [output, setOutput] =
    useState(`🔥 Compilation successful! No cap detected.

No cap, this is fire! 🔥
SHEESH! That's some sigma energy! 🗿
And that's on periodt! ✨

✨ Program executed successfully
⚡ 0.002s runtime (that's bussin)
🧠 Brainrot level: MAXIMUM OVERDRIVE
🗿 Ohio factor: CRITICAL
💀 Skull count: 42
🔥 Fire detected: TRUE`);

  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    // Simulate chaotic compilation
    setTimeout(() => {
      const chaoticOutputs = [
        "\n\n🔄 Re-executed at " +
          new Date().toLocaleTimeString() +
          " - Still bussin!",
        "\n\n💀 Skull emoji deployed successfully",
        "\n\n🗿 Ohio mode: ACTIVATED",
        "\n\n🔥 Fire level: MAXIMUM",
        "\n\n✨ Periodt energy: IMMACULATE",
      ];
      const randomOutput =
        chaoticOutputs[Math.floor(Math.random() * chaoticOutputs.length)];
      setOutput((prev) => prev + randomOutput);
      setIsRunning(false);
    }, Math.random() * 1000 + 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <section
      id="playground"
      className="relative z-10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Chaotic Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold sm:text-5xl">
            <span className="text-pink-400">Live Playground</span>
          </h2>
          <p className="mb-2 font-mono text-xl text-cyan-400 neon-glow">
            Write, compile, and run Brainrot code in real-time
          </p>
          <p className="font-mono text-gray-300">
            Full LSP support with <span className="text-pink-400">chaotic</span>{" "}
            syntax highlighting
          </p>
        </div>

        {/* Chaotic Editor Container */}
        <div className="relative overflow-hidden border-2 shadow-2xl bg-gray-900/60 backdrop-blur-sm rounded-2xl border-pink-500/50 neon-border">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/20 via-cyan-500/20 to-green-500/20 animate-pulse"></div>
          </div>

          {/* Chaotic Editor Header */}
          <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b-2 bg-gray-800/70 border-pink-500/30">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-spin"></div>
              </div>
              <span className="font-mono font-bold text-pink-400 neon-glow">
                main.brainrot
              </span>
              <div className="flex space-x-1">
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <Code className="w-4 h-4 text-green-400 animate-bounce" />
                <Cpu className="w-4 h-4 text-yellow-400 animate-spin" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-3 text-gray-400 transition-all duration-200 transform rounded-lg hover:text-pink-400 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12"
                title="Copy code"
              >
                <Copy className="w-5 h-5" />
              </button>
              <button className="p-3 text-gray-400 transition-all duration-200 transform rounded-lg hover:text-cyan-400 hover:bg-gray-700/50 hover:scale-110 hover:-rotate-12">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-3 text-gray-400 transition-all duration-200 transform rounded-lg hover:text-green-400 hover:bg-gray-700/50 hover:scale-110 hover:rotate-45">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative z-10 grid gap-0 lg:grid-cols-2">
            {/* Chaotic Code Editor */}
            <div className="relative">
              <Editor
                height="600px"
                defaultLanguage="rust"
                value={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
                options={{
                  fontSize: 15,
                  fontFamily: "JetBrains Mono, Consolas, Monaco, monospace",
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  insertSpaces: true,
                  wordWrap: "on",
                  lineNumbers: "on",
                  glyphMargin: false,
                  folding: false,
                  lineDecorationsWidth: 0,
                  lineNumbersMinChars: 3,
                  renderLineHighlight: "line",
                  bracketPairColorization: { enabled: true },
                  suggestOnTriggerCharacters: true,
                  quickSuggestions: true,
                  parameterHints: { enabled: true },
                  colorDecorators: true,
                  cursorBlinking: "smooth",
                  cursorSmoothCaretAnimation: "on",
                }}
              />

              {/* Chaotic Run Button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="flex items-center px-6 py-3 space-x-3 font-mono font-bold text-white transition-all duration-300 transform bg-pink-500 rounded-lg group hover:bg-pink-600 disabled:bg-gray-600 hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 hover:rotate-2"
                >
                  {isRunning ? (
                    <>
                      <Zap className="w-5 h-5 animate-spin" />
                      <span>EXECUTING...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 group-hover:animate-bounce" />
                      <span>RUN IT!</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Chaotic Output Panel */}
            <div className="border-t-2 border-l-2 bg-gray-950/90 border-pink-500/30 lg:border-l lg:border-t-0">
              <div className="p-4 border-b-2 border-pink-500/30 bg-gray-800/50">
                <h3 className="flex items-center space-x-2 font-mono text-lg font-bold text-pink-400 neon-glow">
                  <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <span>CHAOTIC OUTPUT</span>
                  <Terminal className="w-5 h-5 text-cyan-400 animate-bounce" />
                </h3>
              </div>
              <div className="p-6 h-[552px] overflow-y-auto">
                <pre className="font-mono text-sm text-gray-200 whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Chaotic Features */}
        <div className="grid gap-8 mt-16 md:grid-cols-3">
          <div className="p-8 transition-all duration-300 transform border-2 bg-gray-900/50 backdrop-blur-sm rounded-xl border-cyan-500/50 hover:scale-105 hover:rotate-1">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-3 rounded-lg bg-cyan-500/30 neon-border">
                <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
              <h3 className="font-mono text-2xl font-bold text-cyan-400 neon-glow">
                Real-time LSP
              </h3>
            </div>
            <p className="font-mono text-gray-300">
              Full Language Server Protocol support with{" "}
              <span className="text-pink-400">chaotic</span> code completion,
              error detection, and <span className="text-cyan-400">based</span>{" "}
              suggestions.
            </p>
          </div>

          <div className="p-8 transition-all duration-300 transform border-2 bg-gray-900/50 backdrop-blur-sm rounded-xl border-pink-500/50 hover:scale-105 hover:-rotate-1">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-3 rounded-lg bg-pink-500/30 neon-border">
                <Play className="w-8 h-8 text-pink-400 animate-bounce" />
              </div>
              <h3 className="font-mono text-2xl font-bold text-pink-400 neon-glow">
                Instant Execution
              </h3>
            </div>
            <p className="font-mono text-gray-300">
              Compile and run your{" "}
              <span className="text-pink-400">brainrot</span> code instantly in
              the browser with <span className="text-cyan-400">zero setup</span>{" "}
              required. No cap!
            </p>
          </div>

          <div className="p-8 transition-all duration-300 transform border-2 bg-gray-900/50 backdrop-blur-sm rounded-xl border-green-500/50 hover:scale-105 hover:rotate-1">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-3 rounded-lg bg-green-500/30 neon-border">
                <Settings className="w-8 h-8 text-green-400 animate-spin" />
              </div>
              <h3 className="font-mono text-2xl font-bold text-green-400 neon-glow">
                Customizable
              </h3>
            </div>
            <p className="font-mono text-gray-300">
              Personalize your <span className="text-green-400">chaotic</span>{" "}
              coding experience with themes, keybindings, and{" "}
              <span className="text-pink-400">cursed</span> editor preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;