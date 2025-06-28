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
  Keyboard,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import * as monaco from "monaco-editor";

const EditorSection: React.FC = () => {
  const [code, setCode] = useState(`// variable declarations
yeet name = "brainrot";
yeet isCool = based;
yeet count = 3;

// function definition with conditionals
vibe checkCoolness = fn(flag) {
	fr (flag) {
		slay "Certified based ✅";
	} sus {
		slay "Cap detected ❌";
	}
};

// arrays
yeet nums = [1, 2, 3];
yeet second = nums[1];  // should be 2

// hash tables (objects/maps)
yeet profile = {
	"username": name,
	"followers": 1337,
	"verified": based
};

// indexing into a hash
yeet username = profile["username"];

// function that returns another function (vibes)
vibe multiplier = fn(n) {
	slay fn(x) { slay x * n; };
};

yeet timesTwo = multiplier(2);
yeet result = timesTwo(5);  // 10

// final check
checkCoolness(profile["verified"]);`);

  const [output, setOutput] =
    useState(`🔥 Compilation successful! No cap detected.

Certified based ✅

✨ Program executed successfully
⚡ 0.001s runtime (that's bussin)
🧠 Brainrot level: MAXIMUM OVERDRIVE
🗿 Ohio factor: CRITICAL
💀 Skull count: 42
🔥 Fire detected: TRUE
📊 Variables declared: 8
🎯 Functions defined: 2
🚀 Rizz level: OVER 9000`);

  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [vimMode, setVimMode] = useState(false);
  const [vimStatusLine, setVimStatusLine] = useState("-- INSERT --");
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const vimModeRef = useRef<any>(null);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    
    // Define and apply the Catppuccin Mocha theme
    monaco.editor.defineTheme('catppuccin-mocha', {
      base: 'vs-dark',
      inherit: false,
      rules: [
        { token: '', foreground: 'cdd6f4', background: '1e1e2e' },
        { token: 'comment', foreground: '6c7086', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'cba6f7', fontStyle: 'bold' },
        { token: 'keyword.control', foreground: 'cba6f7' },
        { token: 'keyword.operator', foreground: '89dceb' },
        { token: 'keyword.other', foreground: 'cba6f7' },
        { token: 'string', foreground: 'a6e3a1' },
        { token: 'string.escape', foreground: '89dceb' },
        { token: 'number', foreground: 'fab387' },
        { token: 'number.hex', foreground: 'fab387' },
        { token: 'regexp', foreground: 'a6e3a1' },
        { token: 'type', foreground: 'f9e2af' },
        { token: 'type.identifier', foreground: 'f9e2af' },
        { token: 'class', foreground: 'f9e2af' },
        { token: 'class.identifier', foreground: 'f9e2af' },
        { token: 'function', foreground: '89b4fa' },
        { token: 'function.identifier', foreground: '89b4fa' },
        { token: 'variable', foreground: 'f38ba8' },
        { token: 'variable.identifier', foreground: 'f38ba8' },
        { token: 'constant', foreground: 'fab387' },
        { token: 'constant.identifier', foreground: 'fab387' },
        { token: 'property', foreground: 'f38ba8' },
        { token: 'operator', foreground: '89dceb' },
        { token: 'delimiter', foreground: 'cdd6f4' },
        { token: 'delimiter.bracket', foreground: 'cdd6f4' },
        { token: 'delimiter.parenthesis', foreground: 'cdd6f4' },
        { token: 'tag', foreground: 'f38ba8' },
        { token: 'attribute.name', foreground: 'fab387' },
        { token: 'attribute.value', foreground: 'a6e3a1' },
        { token: 'identifier', foreground: 'cdd6f4' },
        { token: 'punctuation', foreground: 'cdd6f4' },
      ],
      colors: {
        'editor.background': '#1e1e2e',
        'editor.foreground': '#cdd6f4',
        'editorLineNumber.foreground': '#6c7086',
        'editorLineNumber.activeForeground': '#f5c2e7',
        'editor.lineHighlightBackground': '#313244',
        'editor.selectionBackground': '#585b70',
        'editor.inactiveSelectionBackground': '#45475a',
        'editorCursor.foreground': '#f5c2e7',
        'editor.findMatchBackground': '#74c7ec40',
        'editor.findMatchHighlightBackground': '#74c7ec30',
        'editorWidget.background': '#181825',
        'editorWidget.border': '#585b70',
        'editorSuggestWidget.background': '#181825',
        'editorSuggestWidget.border': '#585b70',
        'editorSuggestWidget.selectedBackground': '#313244',
        'editorHoverWidget.background': '#181825',
        'editorHoverWidget.border': '#585b70',
        'peekView.border': '#89b4fa',
        'peekViewEditor.background': '#11111b',
        'peekViewResult.background': '#181825',
        'peekViewTitle.background': '#11111b',
        'panel.background': '#181825',
        'panelTitle.activeBorder': '#89b4fa',
        'statusBar.background': '#181825',
        'statusBar.foreground': '#bac2de',
        'tab.activeBackground': '#1e1e2e',
        'tab.activeForeground': '#cdd6f4',
        'tab.border': '#11111b',
        'tab.inactiveBackground': '#181825',
        'titleBar.activeBackground': '#181825',
        'titleBar.activeForeground': '#bac2de',
        'titleBar.inactiveBackground': '#181825',
        'titleBar.inactiveForeground': '#6c7086',
        'editorGutter.background': '#1e1e2e',
        'editorGutter.modifiedBackground': '#f9e2af',
        'editorGutter.addedBackground': '#a6e3a1',
        'editorGutter.deletedBackground': '#f38ba8',
        'diffEditor.insertedTextBackground': '#a6e3a115',
        'diffEditor.removedTextBackground': '#f38ba815',
        'scrollbarSlider.background': '#58576080',
        'scrollbarSlider.activeBackground': '#74c7ec80',
        'scrollbarSlider.hoverBackground': '#6c708680',
        'editorOverviewRuler.border': '#313244',
        'editorOverviewRuler.findMatchForeground': '#fab387',
        'editorOverviewRuler.rangeHighlightForeground': '#89b4fa',
        'editorOverviewRuler.selectionHighlightForeground': '#cdd6f4',
        'editorOverviewRuler.wordHighlightForeground': '#89dceb',
        'editorOverviewRuler.wordHighlightStrongForeground': '#cba6f7',
        'editorOverviewRuler.modifiedForeground': '#f9e2af',
        'editorOverviewRuler.addedForeground': '#a6e3a1',
        'editorOverviewRuler.deletedForeground': '#f38ba8',
        'editorOverviewRuler.errorForeground': '#f38ba8',
        'editorOverviewRuler.warningForeground': '#f9e2af',
        'editorOverviewRuler.infoForeground': '#89b4fa',
        'editorError.foreground': '#f38ba8',
        'editorWarning.foreground': '#f9e2af',
        'editorInfo.foreground': '#89b4fa',
        'editorHint.foreground': '#89dceb',
        'editorMarkerNavigation.background': '#181825',
        'editorMarkerNavigationError.background': '#f38ba8',
        'editorMarkerNavigationWarning.background': '#f9e2af',
        'editorMarkerNavigationInfo.background': '#89b4fa',
      }
    });

    // Apply the theme
    monaco.editor.setTheme('catppuccin-mocha');
    
    // Initialize vim mode if enabled
    if (vimMode) {
      initVimMode(editor);
    }
  };

  const initVimMode = async (editor: monaco.editor.IStandaloneCodeEditor) => {
    try {
      const { initVimMode } = await import('monaco-vim');
      
      if (vimModeRef.current) {
        vimModeRef.current.dispose();
      }
      
      vimModeRef.current = initVimMode(editor, document.getElementById('vim-status-line'));
      
      // Listen to vim mode changes
      vimModeRef.current.on('vim-mode-change', (mode: any) => {
        const modeMap: { [key: string]: string } = {
          'normal': '-- NORMAL --',
          'insert': '-- INSERT --',
          'visual': '-- VISUAL --',
          'replace': '-- REPLACE --',
        };
        setVimStatusLine(modeMap[mode.mode] || `-- ${mode.mode.toUpperCase()} --`);
      });
      
      // Set initial status
      setVimStatusLine("-- NORMAL --");
    } catch (error) {
      console.error('Failed to initialize vim mode:', error);
      setVimMode(false);
    }
  };

  const toggleVimMode = async () => {
    const newVimMode = !vimMode;
    setVimMode(newVimMode);
    
    if (editorRef.current) {
      if (newVimMode) {
        await initVimMode(editorRef.current);
      } else {
        if (vimModeRef.current) {
          vimModeRef.current.dispose();
          vimModeRef.current = null;
        }
        setVimStatusLine("-- INSERT --");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (vimModeRef.current) {
        vimModeRef.current.dispose();
      }
    };
  }, []);

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
        "\n\n📊 Hash table accessed successfully",
        "\n\n🎪 Function closure created",
        "\n\n⚡ Array indexing: FLAWLESS",
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
              {/* Vim Mode Toggle */}
              <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700">
                <Keyboard className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 font-mono">VIM</span>
                <button
                  onClick={toggleVimMode}
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
                  title={vimMode ? "Disable Vim keybindings" : "Enable Vim keybindings"}
                >
                  {vimMode ? (
                    <ToggleRight className="w-5 h-5 text-pink-500" />
                  ) : (
                    <ToggleLeft className="w-5 h-5" />
                  )}
                </button>
              </div>

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
                onMount={handleEditorDidMount}
                theme="catppuccin-mocha"
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

              {/* Vim Status Line */}
              {vimMode && (
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 px-4 py-2">
                  <div 
                    id="vim-status-line" 
                    className="font-mono text-sm text-pink-400"
                  >
                    {vimStatusLine}
                  </div>
                </div>
              )}

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
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-slate-500 font-mono">NO ERRORS</span>
                  </div>
                </h3>
              </div>
              <div className={`p-8 overflow-y-auto ${vimMode ? 'h-[564px]' : 'h-[602px]'}`}>
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
                <Keyboard className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-200">
                Vim Keybindings
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              Full Vim keybinding support with modal editing, visual mode, and all
              your favorite Vim commands. Toggle on/off as needed.
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