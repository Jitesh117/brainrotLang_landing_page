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
    <header className="relative z-50 border-b border-pink-500/30 bg-gray-900/95 backdrop-blur-md">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 h-20">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500/20 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative flex items-center p-2 space-x-2 border rounded-xl bg-gray-800/50 border-pink-500/30 backdrop-blur-sm">
                <Brain className="w-8 h-8 text-pink-400 animate-pulse" />
                <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-full animate-pulse"></div>
                <Skull className="w-6 h-6 text-cyan-400 animate-bounce" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text">
                Brainrot
              </span>
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                PROGRAMMING LANG
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden space-x-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center px-4 py-2 space-x-2 font-mono text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg hover:text-white hover:bg-gray-800/50"
              >
                <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="relative">
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
                </span>
              </a>
            ))}
          </nav>

          {/* Enhanced GitHub Link */}
          <div className="items-center hidden space-x-4 md:flex">
            <a
              href="#github"
              className="group relative flex items-center px-4 py-2 space-x-2 font-mono text-sm font-medium text-gray-300 transition-all duration-300 border rounded-lg border-gray-700/50 hover:text-white hover:border-cyan-400/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span>GitHub</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
            </a>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-3 text-gray-300 transition-all duration-300 border rounded-lg md:hidden border-gray-700/50 hover:text-pink-400 hover:border-pink-400/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-pink-400/20"
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/0 to-cyan-500/0 hover:from-pink-500/10 hover:to-cyan-500/10 transition-all duration-300"></div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 border-t md:hidden top-20 bg-gray-900/98 backdrop-blur-md border-pink-500/30">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-3 space-x-3 font-mono text-gray-300 transition-all duration-300 rounded-lg hover:text-white hover:bg-gray-800/50 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="relative">
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
                  </span>
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-700/50">
                <a
                  href="#github"
                  className="group flex items-center px-4 py-3 space-x-3 font-mono text-gray-300 transition-all duration-300 rounded-lg hover:text-white hover:bg-gray-800/50 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative">
                    <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="relative">
                    GitHub
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300 group-hover:w-full"></div>
                  </span>
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