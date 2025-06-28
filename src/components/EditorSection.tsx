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
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-100">
            Live <span className="text-gradient">Playground</span>
          </h2>
          <p className="mb-2 text-xl text-slate-300">
            Write, compile, and run Brainrot code in real-time
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Full LSP support with intelligent syntax highlighting and error detection
          </p>
        </div>

        {/* Editor Container */}
        <div className="card overflow-hidden">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-mono font-medium text-pink-500">
                main.brainrot
              </span>
              <div className="flex space-x-1">
                <Terminal className="w-4 h-4 text-slate-400" />
                <Code className="w-4 h-4 text-slate-400" />
                <Cpu className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-2 text-slate-400 transition-colors duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800"
                title="Copy code"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-400 transition-colors duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-400 transition-colors duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            {/* Code Editor */}
            <div className="relative">
              <Editor
                height="600px"
                defaultLanguage="rust"
                value={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
                options={{
                  fontSize: 14,
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

              {/* Run Button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="btn-primary flex items-center space-x-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                  {isRunning ? (
                    <>
                      <Zap className="w-4 h-4 animate-spin" />
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Run</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="border-t border-l-0 lg:border-l lg:border-t-0 border-slate-800 bg-slate-950/50">
              <div className="p-4 border-b border-slate-800">
                <h3 className="flex items-center space-x-2 text-lg font-medium text-slate-200">
                  <Terminal className="w-5 h-5 text-pink-500" />
                  <span>Output</span>
                </h3>
              </div>
              <div className="p-6 h-[552px] overflow-y-auto">
                <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 mt-16 md:grid-cols-3">
          <div className="card card-hover p-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20">
                <Zap className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">
                Real-time LSP
              </h3>
            </div>
            <p className="text-slate-400">
              Full Language Server Protocol support with intelligent code completion,
              error detection, and smart suggestions.
            </p>
          </div>

          <div className="card card-hover p-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20">
                <Play className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">
                Instant Execution
              </h3>
            </div>
            <p className="text-slate-400">
              Compile and run your brainrot code instantly in the browser with
              zero setup required. No cap!
            </p>
          </div>

          <div className="card card-hover p-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20">
                <Settings className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">
                Customizable
              </h3>
            </div>
            <p className="text-slate-400">
              Personalize your coding experience with themes, keybindings, and
              editor preferences tailored to your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;