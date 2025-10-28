"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`
            rounded-full px-8 py-3
            backdrop-blur-xl backdrop-saturate-150
            ${theme === "dark" 
              ? "bg-white/5 border border-white/20 shadow-2xl shadow-white/5" 
              : "bg-white/70 border border-black/10 shadow-2xl shadow-black/10"
            }
          `}
        >
          <div className="flex items-center justify-between">
            {/* Logo  */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("Home")}
              className={`cursor-pointer text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                MR
              </span>
            </motion.button>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-300
                    ${theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-black hover:bg-black/5"
                    }
                  `}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`
                p-3 rounded-full backdrop-blur-sm
                ${theme === "dark"
                  ? "bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-300 border border-yellow-400/30"
                  : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-600 border border-blue-400/30"
                }
                transition-all duration-500
              `}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}