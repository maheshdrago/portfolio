"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  isVisible: boolean;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TextReveal({
  text,
  className = "",
  isVisible = false,
}: TextRevealProps) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => ""));

  console.log(text, isVisible);
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
    }, 40);

    return () => clearInterval(interval);
  }, [text, isVisible]);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`${className} tracking-tight`} // Added tracking-tight
      style={{ letterSpacing: "0.02em" }} // Better spacing for the effect
    >
      {displayText.map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            minWidth: char === " " ? "0.3em" : undefined,
            fontVariantNumeric: "tabular-nums", // Makes numbers same width
          }}
        >
          {char || "\u00A0"}
        </span>
      ))}
    </motion.div>
  );

}
