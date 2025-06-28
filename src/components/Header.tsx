import {
  BookOpen,
  Brain,
  Cpu,
  FileCode,
  Github,
  Menu,
  Puzzle,
  X,
  Skull,
} from "lucide-react";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Docs", icon: BookOpen, href: "#docs" },
    { name: "Playground", icon: FileCode, href: "#playground" },
    { name: "Compiler", icon: Cpu, href: "#compiler" },
    { name: "LSP", icon: Puzzle, href: "#lsp" },
  ];

  return (
    <header className="relative z-50 border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-md">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center p-2 space-x-2 border rounded-lg bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <Brain className="w-6 h-6 text-pink-500" />
              <div className="w-0.5 h-6 bg-gradient-to-b from-pink-500 to-pink-600 rounded-full"></div>
              <Skull className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xl text-gradient">
                Brainrot
              </span>
              <span className="text-xs text-slate-500 tracking-wider font-mono">
                PROGRAMMING LANG
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-slate-400 transition-colors duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800/50"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* GitHub Link */}
          <div className="items-center hidden space-x-4 md:flex">
            <a
              href="#github"
              className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-slate-400 transition-colors duration-200 border rounded-lg border-slate-700 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-800/50"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-400 transition-colors duration-200 rounded-lg md:hidden hover:text-slate-200 hover:bg-slate-800/50"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t md:hidden border-slate-800/50 bg-slate-950/98 backdrop-blur-md">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 space-x-3 text-slate-400 transition-colors duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              <div className="pt-2 mt-2 border-t border-slate-800/50">
                <a
                  href="#github"
                  className="flex items-center px-3 py-2 space-x-3 text-slate-400 transition-colors duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;