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
  Star,
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
    <header className="relative z-50 border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-xl">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 h-18">
          {/* Logo Section - Enhanced */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center p-3 space-x-3 border rounded-xl bg-slate-900/50 border-slate-800 backdrop-blur-sm shadow-lg">
              <Brain className="w-7 h-7 text-pink-500" />
              <div className="w-0.5 h-7 bg-gradient-to-b from-pink-500 to-pink-600 rounded-full"></div>
              <Skull className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-gradient">
                Brainrot
              </span>
              <span className="text-xs text-slate-500 tracking-widest font-mono uppercase">
                Programming Lang
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden space-x-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center px-4 py-2.5 space-x-2 text-sm font-medium text-slate-400 transition-all duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800/50 relative overflow-hidden"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* GitHub Link - Enhanced */}
          <div className="items-center hidden space-x-4 md:flex">
            <a
              href="#github"
              className="group flex items-center px-5 py-2.5 space-x-2 text-sm font-medium text-slate-400 transition-all duration-200 border rounded-lg border-slate-700 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-800/50 hover:shadow-lg relative overflow-hidden"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>GitHub</span>
              <Star className="w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/0 to-slate-600/0 group-hover:from-slate-700/20 group-hover:to-slate-600/20 transition-all duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button - Enhanced */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-3 text-slate-400 transition-all duration-200 rounded-lg md:hidden hover:text-slate-200 hover:bg-slate-800/50 group"
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              ) : (
                <Menu className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="border-t md:hidden border-slate-800/50 bg-slate-950/98 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-3 space-x-3 text-slate-400 transition-all duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800/50 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-slate-800/50">
                <a
                  href="#github"
                  className="group flex items-center px-4 py-3 space-x-3 text-slate-400 transition-all duration-200 rounded-lg hover:text-slate-200 hover:bg-slate-800/50 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">GitHub</span>
                  <Star className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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