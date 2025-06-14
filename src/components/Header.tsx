import {
  BookOpen,
  Brain,
  Cpu,
  FileCode,
  Github,
  Menu,
  Puzzle,
  X,
  Zap,
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
    <header className="relative z-50 border-b-2 bg-gray-900/90 backdrop-blur-sm border-pink-500/50 neon-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Chaotic Logo */}
          <div className="flex items-center space-x-3">
            <Brain className="w-10 h-10 text-pink-400 animate-pulse neon-glow" />
            <span className="font-mono text-2xl font-bold text-pink-400">
              Brainrot
            </span>
            <Zap className="w-6 h-6 text-cyan-400 animate-bounce" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 font-mono text-gray-300 transition-all duration-200 transform hover:text-pink-400 hover:scale-110"
              >
                <item.icon className="w-5 h-5 hover:animate-spin" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* GitHub Link */}
          <div className="items-center hidden space-x-4 md:flex">
            <a
              href="#github"
              className="flex items-center space-x-2 font-mono text-gray-300 transition-all duration-200 transform hover:text-cyan-400 hover:scale-110 hover:rotate-12"
            >
              <Github className="w-6 h-6 hover:animate-bounce" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 text-gray-300 transition-all duration-200 transform rounded-md md:hidden hover:text-pink-400 hover:bg-gray-800/50 hover:scale-110 hover:rotate-12"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 border-b-2 md:hidden top-18 bg-gray-900/95 backdrop-blur-sm border-pink-500/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center py-3 space-x-3 font-mono text-gray-300 transition-all duration-200 transform hover:text-pink-400 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <a
                href="#github"
                className="flex items-center py-3 space-x-3 font-mono text-gray-300 transition-all duration-200 transform hover:text-cyan-400 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
