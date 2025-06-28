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
  CheckCircle,
  AlertCircle,
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
    fn rizz_up(&mut self);
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
    
    fn rizz_up(&mut self) {
        *self += 50; // level up that energy
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
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      const chaoticOutputs = [
        "\n\n🔄 Re-executed at " +
          new Date().toLocaleTimeString() +
          " - Still bussin!",
        "\n\n💀 Skull emoji deployed successfully",
        "\n\n🗿 Ohio mode: ACTIVATED",
        "\n\n🔥 Fire level: MAXIMUM",
        "\n\n✨ Periodt energy: IMMACULATE",
        "\n\n🚀 Rizz level: OVER 9000",
        "\n\n🎯 Based factor: CONFIRMED",
      ];
      const randomOutput =
        chaoticOutputs[Math.floor(Math.random() * chaoticOutputs.length)];
      setOutput((prev) => prev + randomOutput);
      setIsRunning(false);
    }, Math.random() * 1000 + 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="playground"
      className="relative z-10 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header - Enhanced */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
            <Code className="w-4 h-4 mr-2" />
            Interactive Playground
          </div>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl text-slate-100">
            Live <span className="text-gradient">Playground</span>
          </h2>
          <p className="mb-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Write, compile, and run Brainrot code in real-time
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Full LSP support with intelligent syntax highlighting, error detection, and 
            <span className="text-pink-400 font-medium"> absolutely cursed </span>
            code completion
          </p>
        </div>

        {/* Editor Container - Enhanced */}
        <div className="card overflow-hidden shadow-2xl">
          {/* Editor Header - Enhanced */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-slate-800 bg-slate-900/50">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
              </div>
              <span className="font-mono font-semibold text-pink-500 text-lg">
                main.brainrot
              </span>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <Code className="w-4 h-4 text-slate-400" />
                  <Cpu className="w-4 h-4 text-slate-400" />
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-500 font-mono">READY</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleCopy}
                className="group p-3 text-slate-400 transition-all duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800 relative"
                title="Copy code"
              >
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                )}
              </button>
              <button className="group p-3 text-slate-400 transition-all duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
              <button className="group p-3 text-slate-400 transition-all duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800">
                <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            {/* Code Editor - Enhanced */}
            <div className="relative">
              <Editor
                height="650px"
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
                  folding: true,
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
                  smoothScrolling: true,
                  mouseWheelZoom: true,
                }}
              />

              {/* Run Button - Enhanced */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="group relative overflow-hidden bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 disabled:bg-slate-600 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  <div className="flex items-center space-x-2">
                    {isRunning ? (
                      <>
                        <Zap className="w-5 h-5 animate-spin" />
                        <span>Running...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span>Run Code</span>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Output Panel - Enhanced */}
            <div className="border-t border-l-0 lg:border-l lg:border-t-0 border-slate-800 bg-slate-950/70">
              <div className="p-6 border-b border-slate-800 bg-slate-900/30">
                <h3 className="flex items-center space-x-3 text-lg font-semibold text-slate-200">
                  <Terminal className="w-6 h-6 text-pink-500" />
                  <span>Output Console</span>
                  <div className="flex items-center space-x-2 ml-auto">
                    <AlertCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-slate-500 font-mono">NO ERRORS</span>
                  </div>
                </h3>
              </div>
              <div className="p-8 h-[602px] overflow-y-auto">
                <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {output}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Features - Enhanced */}
        <div className="grid gap-8 mt-20 md:grid-cols-3">
          <div className="card card-hover p-10 group">
            <div className="flex items-center mb-8 space-x-4">
              <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors duration-300">
                <Zap className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-200">
                Real-time LSP
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              Full Language Server Protocol support with intelligent code completion,
              error detection, and smart suggestions that understand your brainrot.
            </p>
          </div>

          <div className="card card-hover p-10 group">
            <div className="flex items-center mb-8 space-x-4">
              <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors duration-300">
                <Play className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-200">
                Instant Execution
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              Compile and run your brainrot code instantly in the browser with
              zero setup required. No cap, it just works!
            </p>
          </div>

          <div className="card card-hover p-10 group">
            <div className="flex items-center mb-8 space-x-4">
              <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors duration-300">
                <Settings className="w-8 h-8 text-pink-500 group-hover:rotate-90 transition-transform duration-200" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-200">
                Fully Customizable
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              Personalize your coding experience with themes, keybindings, and
              editor preferences tailored to your chaotic workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;