"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  isVisible: number;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TextReveal({ text, className = "", isVisible = false }: TextRevealProps) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => ""));
  

  useEffect(() => {
    if (!isVisible) return;

    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(() =>
        text.split("").map((char, index) => {
          if (char === " ") return " ";
          
          if (index < iteration) {
            return text[index];
          }
          
          return characters[Math.floor(Math.random() * characters.length)];
        })
      );

      iteration += 0.5;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text.split(""));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayText.map((char, index) => (
        <span key={index} className="inline-block" style={{ minWidth: char === " " ? "0.3em" : undefined }}>
          {char || "\u00A0"}
        </span>
      ))}
    </motion.div>
  );
}