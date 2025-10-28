"use client";

import { motion } from "framer-motion";

interface BackgroundPatternProps {
  theme: "dark" | "light";
}

export default function BackgroundPattern({ theme }: BackgroundPatternProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Static gradient orbs - no animation */}
      <div 
        className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] ${
          theme === "dark" ? "bg-blue-600/20" : "bg-blue-500/30"
        }`}
      />
      <div 
        className={`absolute bottom-0 left-0 w-[900px] h-[900px] rounded-full blur-[150px] ${
          theme === "dark" ? "bg-purple-600/20" : "bg-purple-500/30"
        }`}
      />

      {/* Simple grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Only 3 slow floating shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute top-20 left-1/4 w-32 h-32 border rounded-3xl ${
          theme === "dark" ? "border-white/5" : "border-black/5"
        }`}
      />

      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-32 right-1/3 w-40 h-40 border rounded-full ${
          theme === "dark" ? "border-white/5" : "border-black/5"
        }`}
      />

      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-1/2 right-20 w-24 h-24 rounded-full border ${
          theme === "dark" ? "border-white/5" : "border-black/5"
        }`}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${
            theme === "dark" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"
          } 100%)`,
        }}
      />
    </div>
  );
}