"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import StackableCards from "@/components/StackableCards";
import BackgroundPattern from "@/components/BackgroundPattern";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TextReveal from "@/components/TextReveal";

const projects = [
  {
    title: "AI-Powered Icon Generation Platform",
    description:
      "Customer-facing AI platform generating custom icons from user prompts via DALL·E API, processing 10,000+ daily requests and generating $50K+ revenue.",
    tags: ["Node.js", "React", "DALL·E API", "AWS", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Distributed File System",
    description:
      "Fault-tolerant distributed file system inspired by Google File System with 99.9% availability and zero data loss during node failures.",
    tags: ["Python", "gRPC", "Docker", "Distributed Systems"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "P2P File Sharing System",
    description:
      "Decentralized network for secure file sharing supporting 1,000+ concurrent users with end-to-end encryption and 95% success rate.",
    tags: ["TypeScript", "WebSockets", "Encryption", "DHT"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "High-performance chat app supporting 5,000+ concurrent users with sub-100ms latency and 99.9% message delivery rate.",
    tags: ["TypeScript", "Node.js", "Socket.IO", "Redis", "Kafka"],
    gradient: "from-green-500 to-teal-500",
  },
];

const experiences = [
  {
    role: "Graduate Assistant & Grader",
    company: "University of Maryland, Baltimore County",
    year: "Aug 2024 - May 2025",
    description:
      "Delivered technical assessments for 200+ students, improving code quality awareness by 35% through targeted feedback on Data Science and Network Security courses.",
  },
  {
    role: "Senior Software Engineer",
    company: "Tiger Analytics",
    year: "June 2022 - July 2023",
    description:
      "Architected no-code Terraform automation platform using React and Flask, empowering 500+ users and reducing deployment time by 40%.",
  },
  {
    role: "Data Engineer",
    company: "Tiger Analytics",
    year: "Nov 2021 - May 2022",
    description:
      "Led end-to-end migration from Azure to GCP, processing 5TB+ daily data with 25% cost reduction and 99.9% uptime.",
  },
  {
    role: "Research Intern",
    company: "ICRISAT",
    year: "June 2019 - July 2019",
    description:
      "Developed ML model using TensorFlow to predict optimal fertilizer application rates, improving efficiency by 15%.",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const heroRef = useRef(null);
  const aboutref = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-neutral-50"
      }`}
    >
      <BackgroundPattern theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden"
      >
        {/* Grid Background */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "opacity-[0.03]" : "opacity-[0.08]"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              theme === "dark" ? "white" : "black"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              theme === "dark" ? "white" : "black"
            } 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut",  type:"spring"}}
          className={`absolute top-20 right-20 w-32 h-32 rounded-3xl border-2 ${
            theme === "dark" ? "border-white/10" : "border-black/20"
          }`}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-32 right-1/3 w-20 h-20 rounded-full border-2 ${
            theme === "dark" ? "border-white/10" : "border-black/20"
          }`}
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/3 right-10 w-16 h-16 border-2 ${
            theme === "dark" ? "border-white/10" : "border-black/20"
          }`}
        />

        <div className="max-w-5xl w-full space-y-12 relative z-10">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                theme === "dark"
                  ? "bg-neutral-800/50 text-neutral-300 border border-neutral-700"
                  : "bg-white/80 text-neutral-700 border border-neutral-300 shadow-sm"
              }`}
            >
              <span>👋</span>
              <span>Welcome to my portfolio</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-6xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tight ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Mahesh Reddy
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Changal
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl md:text-2xl max-w-2xl ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Software Engineer specializing in distributed systems, Agentic AI
              systems and full-stack development
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
            >
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              download
              href="https://docs-mahesh.s3.us-east-1.amazonaws.com/Mahesh_Reddy_Changal.pdf"
              target="_blank"
              className={`px-8 py-4 rounded-xl font-medium transition-colors ${
                theme === "dark"
                  ? "bg-neutral-800/50 text-white border border-neutral-700 hover:bg-neutral-800"
                  : "bg-white text-black border-2 border-black/20 hover:border-black/40 hover:bg-neutral-50 shadow-sm"
              }`}
            >
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links - FIXED for light theme */}
          {/* Social Links - PROPERLY FIXED for light theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-6 pt-8"
          >
            <span
              className={`text-sm ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-600"
              }`}
            >
              Connect with me
            </span>
            <div className="flex gap-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/maheshdrago"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  theme === "dark"
                    ? "bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 text-neutral-300"
                    : "bg-white hover:bg-neutral-50 border-2 border-neutral-400 shadow-md hover:shadow-lg text-neutral-800"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/c-mahesh-reddy-6526631b5"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  theme === "dark"
                    ? "bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 text-neutral-300"
                    : "bg-white hover:bg-neutral-50 border-2 border-neutral-400 shadow-md hover:shadow-lg text-neutral-800"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* Resume */}
              {/* Resume */}
              <motion.a
                href="https://docs-mahesh.s3.us-east-1.amazonaws.com/Mahesh_Reddy_Changal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  theme === "dark"
                    ? "bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 text-neutral-300"
                    : "bg-white hover:bg-neutral-50 border-2 border-neutral-400 shadow-md hover:shadow-lg text-neutral-800"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:mahesh6273766@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  theme === "dark"
                    ? "bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 text-neutral-300"
                    : "bg-white hover:bg-neutral-50 border-2 border-neutral-400 shadow-md hover:shadow-lg text-neutral-800"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - FIXED alignment */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span
                className={`text-xs uppercase tracking-wider ${
                  theme === "dark" ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                Scroll
              </span>
              <div
                className={`w-px h-12 ${
                  theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
                }`}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2
              className={`text-5xl md:text-7xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              About Me
            </h2>

            <div
              className={`text-xl md:text-2xl leading-relaxed space-y-6 max-w-4xl ${
                theme === "dark" ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              <p>
                Software engineer passionate about building scalable systems
                that solve real problems. Recently completed my MS in Computer
                Science at UMBC (3.6 GPA), where I delivered technical
                assessments for 200+ students while sharpening my code review
                and debugging expertise.
              </p>

              <p>
                At Tiger Analytics, I architected a no-code infrastructure
                platform that reduced deployment time by 40% for 500+ users. Led
                cloud migrations processing 5TB+ daily data with zero downtime,
                and built ETL pipelines that turned raw data into actionable
                insights. Built tools that let non-technical teams ship
                infrastructure in minutes, not hours.
              </p>

              <p>
                I specialize in distributed systems, full-stack development, and
                data engineering—with a growing focus on AI/ML applications. I
                write clean, tested code and believe in documentation that
                doesn't make developers cry. Currently exploring how LLMs and
                vector databases can create smarter, more intuitive software
                experiences.
              </p>

              <p
                className={`text-2xl md:text-3xl font-semibold pt-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Open to software engineering roles where I can build
                production-grade systems—from cloud-native architectures to
                AI-powered applications that drive real business value.
              </p>
            </div>

            {/* Clean Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                { stat: "3.6", label: "GPA", sublabel: "UMBC" },
                { stat: "3+", label: "Years", sublabel: "Experience" },
                { stat: "40%", label: "Faster", sublabel: "Deployments" },
                { stat: "10+", label: "Projects", sublabel: "Shipped" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 md:p-8 rounded-3xl text-center backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-white/5 border border-white/10 hover:bg-white/10"
                      : "bg-white/80 border border-black/10 shadow-xl hover:shadow-2xl"
                  } transition-all duration-300`}
                >
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}
                  >
                    {item.stat}
                  </div>
                  <div
                    className={`text-sm md:text-base font-semibold mt-2 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {item.label}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      theme === "dark" ? "text-neutral-500" : "text-neutral-600"
                    }`}
                  >
                    {item.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Material Design Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10"
                  : "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-black/10"
              }`}
            >
              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                My Dev Philosophy
              </h3>
              <div className="space-y-4">
                {[
                  "Write code that reads like a story, not a puzzle",
                  "Build systems that scale, not just systems that work",
                  "Document like your future self will forget everything (they will)",
                  "Test early, test often, sleep better at night",
                ].map((philosophy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                        theme === "dark" ? "bg-blue-400" : "bg-blue-600"
                      }`}
                    />
                    <p
                      className={`text-lg ${
                        theme === "dark"
                          ? "text-neutral-300"
                          : "text-neutral-700"
                      }`}
                    >
                      {philosophy}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center pt-8"
            >
              <div
                className={`px-6 py-3 rounded-full flex items-center gap-3 ${
                  theme === "dark"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : "bg-green-500/20 border border-green-500/50 text-green-700"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">Open to Opportunities</span>
              </div>
              <div
                className={`px-6 py-3 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 border border-white/20 text-neutral-300"
                    : "bg-black/5 border border-black/20 text-neutral-700"
                }`}
              >
                <span className="font-medium">Baltimore, MD</span>
              </div>
              <div
                className={`px-6 py-3 rounded-full ${
                  theme === "dark"
                    ? "bg-white/10 border border-white/20 text-neutral-300"
                    : "bg-black/5 border border-black/20 text-neutral-700"
                }`}
              >
                <span className="font-medium">UMBC • MS in CS</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`text-5xl md:text-7xl font-bold text-center mb-16 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            What I Do
          </motion.h2>
        </div>
        <StackableCards theme={theme} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`text-5xl md:text-7xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20"
      >
        <div className="w-full max-w-5xl mx-auto space-y-12 md:space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl lg:text-7xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Experience
          </motion.h2>

          <ExperienceTimeline experiences={experiences} theme={theme} />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.div>

          <h2
            className={`text-5xl md:text-7xl lg:text-8xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Let's Work
            <br />
            Together
          </h2>
          <p
            className={`text-xl md:text-2xl ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            I'm currently open to opportunities in software engineering, Agentic
            AI and cloud architecture.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <motion.a
              href="mailto:mahesh6273766@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full text-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl"
            >
              Email Me
            </motion.a>
            <motion.a
              href="tel:+16674331954"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-5 rounded-full text-xl font-medium ${
                theme === "dark"
                  ? "bg-neutral-800 text-white border-2 border-neutral-700"
                  : "bg-white text-black border-2 border-black/20"
              }`}
            >
              Call Me
            </motion.a>
          </div>

          <div
            className={`text-sm pt-8 ${
              theme === "dark" ? "text-neutral-600" : "text-neutral-500"
            }`}
          >
            (667) 433-1954 • mahesh6273766@gmail.com
          </div>
        </motion.div>
      </section>
    </main>
  );
}
