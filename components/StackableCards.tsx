"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Card {
  id: string;
  number: string;
  title: string;
  description: string;
  skills?: string[];
  color: string;
}

const cards: Card[] = [
  {
    id: "1",
    number: "01",
    title: "Full-Stack Development",
    description: "Building enterprise-grade web applications with modern frameworks, RESTful APIs, and responsive UI/UX design. Experience with Agile methodologies and test-driven development.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Django", "Flask", "FastAPI", "GraphQL", "REST API", "Redux", "Tailwind CSS", "Jest", "Pytest", "HTML5", "CSS3"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "2",
    number: "02",
    title: "Cloud, DevOps & Data Engineering",
    description: "Designing cloud-native architectures with IaC, CI/CD automation, and building scalable data pipelines. Expert in containerization, orchestration, and ETL workflows for big data processing across Azure and AWS ecosystems.",
    skills: ["AWS (EC2, S3, Lambda)", "Azure (Data Factory, Synapse, Key Vault)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Apache Spark", "Apache Airflow", "PySpark", "Databricks", "Snowflake", "dbt", "ETL/ELT", "BigQuery", "Grafana", "Prometheus", "ELK Stack"],
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "3",
    number: "03",
    title: "AI & Machine Learning Engineering",
    description: "Developing production-ready ML models, NLP solutions, and RAG applications. Experience with MLOps, model deployment, and building intelligent systems using LLMs and vector search.",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "LangChain", "OpenAI API", "GPT Models", "Pinecone", "Weaviate", "ChromaDB", "FAISS", "Hugging Face", "MLflow", "Computer Vision", "NLP", "RAG", "Fine-tuning", "Prompt Engineering"],
    color: "from-orange-600 to-red-500",
  },
  {
    id: "4",
    number: "04",
    title: "Distributed Systems & Backend Architecture",
    description: "Engineering fault-tolerant microservices with event-driven architecture, message queuing, and distributed databases. Focus on high availability, scalability, and low-latency systems with robust load balancing.",
    skills: ["Microservices", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "gRPC", "WebSockets", "WebRTC", "Nginx", "System Design", "Load Balancing", "Caching Strategies", "API Gateway", "OAuth 2.0", "SQL/NoSQL"],
    color: "from-green-600 to-teal-500",
  },
];

function CardComponent({
  card,
  index,
  theme,
}: {
  card: Card;
  index: number;
  theme: "dark" | "light";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.4, margin: "0px 0px -200px 0px" });

  return (
    <motion.div 
      ref={cardRef} 
      
      className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-8"
      style={{ zIndex: index }}
    >
      <div className="w-full max-w-6xl" style={{ willChange: "transform" }}>
        <div
          className={`
            relative rounded-3xl md:rounded-[3rem] p-8 md:p-12 lg:p-16
            min-h-[70vh] flex flex-col justify-between overflow-hidden
            transition-all duration-700 ease-out
            ${theme === "dark"
              ? "bg-neutral-900 border-2 border-white/10"
              : "bg-white border-2 border-black/10"
            }
            shadow-2xl
            ${isInView ? "opacity-100 scale-100" : "opacity-60 scale-95"}
          `}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10`} />

          {/* Geometric Decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large circle top right */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`absolute -top-20 -right-20 w-64 h-64 rounded-full border-2 ${
                theme === "dark" ? "border-white/10" : "border-black/10"
              }`}
            />

            {/* Square bottom left */}
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 45 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              className={`absolute -bottom-16 -left-16 w-48 h-48 border-2 rounded-3xl ${
                theme === "dark" ? "border-white/10" : "border-black/10"
              }`}
            />

            {/* Small circle middle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className={`absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-2 ${
                theme === "dark" ? "border-white/5" : "border-black/5"
              }`}
            />

            {/* Triangle shape */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={isInView ? { opacity: 1, rotate: 360 } : { opacity: 0, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
              className="absolute bottom-1/3 right-1/3"
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke={theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Dots pattern */}
            <div className="absolute top-10 left-10 flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-white/20" : "bg-black/20"
                  }`}
                />
              ))}
            </div>

            {/* Curved line */}
            <motion.div
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-0 right-0"
            >
              <svg width="200" height="200" viewBox="0 0 200 200">
                <motion.path
                  d="M 0 200 Q 100 100 200 0"
                  fill="none"
                  stroke={theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                />
              </svg>
            </motion.div>

            {/* Grid lines */}
            <div className="absolute inset-0" style={{ opacity: 0.03 }}>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(${theme === "dark" ? "white" : "black"} 1px, transparent 1px),
                    linear-gradient(90deg, ${theme === "dark" ? "white" : "black"} 1px, transparent 1px)
                  `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* Gradient orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${card.color} opacity-20 blur-3xl`}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8 md:space-y-12">
            {/* Number Badge */}
            <div
              className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${card.color} text-white text-2xl md:text-3xl font-bold shadow-lg transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {card.number}
            </div>

            {/* Title */}
            <h3
              className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${
                theme === "dark" ? "text-white" : "text-black"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className={`text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl transition-all duration-700 ${
                theme === "dark" ? "text-neutral-300" : "text-neutral-700"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              {card.description}
            </p>
          </div>

          {/* Skills */}
          <div className="relative z-10 flex flex-wrap gap-3">
            {card.skills?.map((skill, i) => (
              <div
                key={skill}
                className={`
                  px-5 py-2.5 rounded-full text-sm md:text-base font-medium
                  transition-all duration-500
                  ${theme === "dark"
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-black/5 text-black border border-black/10"
                  }
                  ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: `${300 + i * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StackableCards({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="relative">
      {cards.map((card, index) => (
        <CardComponent
          key={card.id}
          card={card}
          index={index}
          theme={theme}
        />
      ))}
    </div>
  );
}