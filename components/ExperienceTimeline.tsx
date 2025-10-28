"use client";

import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  theme: "dark" | "light";
}

export default function ExperienceTimeline({ experiences, theme }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line - Left on mobile, center on desktop */}
      <div className={`absolute left-2 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 ${
        theme === "dark" ? "bg-white/20" : "bg-black/20"
      }`} />

      <div className="space-y-8 md:space-y-16">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Left Side */}
                {isLeft ? (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.03, x: 10 }}
                      className={`
                        p-8 rounded-2xl text-right
                        ${theme === "dark"
                          ? "bg-white/5 border border-white/10 hover:bg-white/10"
                          : "bg-white/80 border border-black/10 hover:bg-white shadow-lg"
                        }
                        backdrop-blur-sm transition-all duration-300
                      `}
                    >
                      <div className={`text-sm font-mono mb-3 ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}>
                        {exp.year}
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}>
                        {exp.role}
                      </h3>
                      <p className={`text-base mb-4 ${
                        theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                      }`}>
                        {exp.company}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        theme === "dark" ? "text-neutral-500" : "text-neutral-600"
                      }`}>
                        {exp.description}
                      </p>
                    </motion.div>
                    <div /> {/* Empty space on right */}
                  </>
                ) : (
                  <>
                    <div /> {/* Empty space on left */}
                    <motion.div
                      whileHover={{ scale: 1.03, x: -10 }}
                      className={`
                        p-8 rounded-2xl text-left
                        ${theme === "dark"
                          ? "bg-white/5 border border-white/10 hover:bg-white/10"
                          : "bg-white/80 border border-black/10 hover:bg-white shadow-lg"
                        }
                        backdrop-blur-sm transition-all duration-300
                      `}
                    >
                      <div className={`text-sm font-mono mb-3 ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}>
                        {exp.year}
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}>
                        {exp.role}
                      </h3>
                      <p className={`text-base mb-4 ${
                        theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                      }`}>
                        {exp.company}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        theme === "dark" ? "text-neutral-500" : "text-neutral-600"
                      }`}>
                        {exp.description}
                      </p>
                    </motion.div>
                  </>
                )}
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex items-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`
                    ml-8 w-full p-6 rounded-2xl
                    ${theme === "dark"
                      ? "bg-white/5 border border-white/10 hover:bg-white/10"
                      : "bg-white/80 border border-black/10 hover:bg-white shadow-lg"
                    }
                    backdrop-blur-sm transition-all duration-300
                  `}
                >
                  <div className={`text-sm font-mono mb-3 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {exp.year}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}>
                    {exp.role}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                  }`}>
                    {exp.company}
                  </p>
                  <p className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-neutral-500" : "text-neutral-600"
                  }`}>
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.4 }}
                className={`
                  absolute left-2 md:left-1/2 top-1/2 -translate-y-1/2 
                  w-3 h-3 md:w-5 md:h-5 rounded-full -translate-x-1/2
                  ${theme === "dark"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50"
                    : "bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/50"
                  }
                  border-2 md:border-4 ${theme === "dark" ? "border-black" : "border-neutral-50"}
                  z-10
                `}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}