"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];

  const mobileMenuItems = [
    { name: "Home", icon: "home" },
    { name: "About", icon: "user" },
    { name: "Projects", icon: "folder" },
    { name: "Skills", icon: "code" },
    { name: "Experience", icon: "briefcase" },
    { name: "Contact", icon: "mail" },
  ];

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const renderIcon = (iconType: string) => {
    const iconClass = "w-5 h-5";
    switch (iconType) {
      case "home":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case "user":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "folder":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        );
      case "code":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "briefcase":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case "mail":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
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
            ${
              theme === "dark"
                ? "bg-white/5 border border-white/20 shadow-2xl shadow-white/5"
                : "bg-white/70 border border-black/10 shadow-2xl shadow-black/10"
            }
          `}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
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

              {/* Desktop Nav Items */}
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
                    ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-black hover:bg-black/5"
                    }
                  `}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-full ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.15, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`
                hidden md:block p-3 rounded-full backdrop-blur-sm
                ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-300 border border-yellow-400/30"
                    : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-600 border border-blue-400/30"
                }
                transition-all duration-500
              `}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div
              className={`
              rounded-3xl p-6 backdrop-blur-xl backdrop-saturate-150
              ${
                theme === "dark"
                  ? "bg-white/5 border border-white/20 shadow-2xl shadow-white/5"
                  : "bg-white/90 border border-black/10 shadow-2xl shadow-black/10"
              }
            `}
            >
              <div className="flex flex-col gap-2">
                {mobileMenuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.name)}
                    className={`
                      flex items-center gap-4 p-4 rounded-2xl
                      transition-all duration-300
                      ${
                        theme === "dark"
                          ? "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                          : "text-gray-700 hover:text-black hover:bg-black/5"
                      }
                    `}
                  >
                    <div
                      className={`
                      ${
                        theme === "dark"
                          ? "text-blue-400"
                          : "text-blue-600"
                      }
                    `}
                    >
                      {renderIcon(item.icon)}
                    </div>
                    <span className="text-base font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}