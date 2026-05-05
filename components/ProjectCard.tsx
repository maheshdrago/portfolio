"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  project: {
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    gradient: string;
    href?: string;
    status?: string;
    impact?: string;
    highlights?: string[];
  };
  index: number;
  theme: "dark" | "light";
}

export default function ProjectCard({ project, index, theme }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer perspective-1000"
    >
      <div
        className={`
          relative p-8 rounded-3xl overflow-hidden
          ${theme === "dark"
            ? "bg-white/5 border border-white/10"
            : "bg-black/5 border border-black/10"
          }
          backdrop-blur-sm
          transition-all duration-500
        `}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`}
          animate={isHovered ? { scale: 1.5, rotate: 180 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Image Placeholder with Animation */}
        <motion.div
          className={`relative w-full h-48 rounded-2xl mb-6 overflow-hidden ${
            theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
            animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/30"
            animate={isHovered ? { rotate: -360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {project.status && (
            <span
              className={`inline-flex mb-4 text-xs font-semibold px-3 py-1 rounded-full ${
                theme === "dark"
                  ? "bg-white/10 text-neutral-200 border border-white/20"
                  : "bg-black/10 text-neutral-700 border border-black/20"
              }`}
            >
              {project.status}
            </span>
          )}

          <motion.h3
            className={`text-2xl font-bold mb-3 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {project.subtitle && (
            <p
              className={`mb-3 text-sm font-medium ${
                theme === "dark" ? "text-blue-300" : "text-blue-700"
              }`}
            >
              {project.subtitle}
            </p>
          )}
          
          <motion.p
            className={`mb-4 ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-600"
            }`}
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {project.description}
          </motion.p>

          {project.impact && (
            <p
              className={`mb-4 text-sm font-semibold ${
                theme === "dark" ? "text-neutral-200" : "text-neutral-800"
              }`}
            >
              Impact: {project.impact}
            </p>
          )}

          {project.highlights?.length ? (
            <ul className="mb-5 space-y-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className={`text-sm flex gap-2 ${
                    theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`text-xs px-3 py-1.5 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 text-neutral-300 border border-white/20"
                    : "bg-black/10 text-neutral-700 border border-black/20"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {project.href && (
            <motion.a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              View Project
              <span aria-hidden="true">↗</span>
            </motion.a>
          )}
        </div>

        {/* Corner Accent */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl`}
          animate={isHovered ? { scale: 2 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
