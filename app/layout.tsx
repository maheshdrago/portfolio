import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahesh Reddy Changal | AI & Full-Stack Engineer",
  description:
    "Software Engineer II specializing in production RAG systems, agentic AI workflows, cloud platforms, data engineering, and full-stack development.",
  keywords: [
    "Mahesh Reddy Changal",
    "AI Engineer",
    "RAG Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "LangChain",
    "LangGraph",
    "Azure AI Search",
    "Azure OpenAI",
    "FastAPI",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
