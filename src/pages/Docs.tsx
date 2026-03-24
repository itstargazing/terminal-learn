import React from "react";
import { Search, ChevronRight, BookOpen, Terminal, Cpu, Globe, Zap, Shield, Layers, Command, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import ReactMarkdown from "react-markdown";

const docsContent = `
# System Architecture

Welcome to the official documentation for **TERMINAL_LEARN**. This guide provides a comprehensive overview of our system's architecture, core components, and how to get the most out of our learning platform.

## Core Philosophy

Our platform is built on three main pillars:
1. **Performance**: Every component is optimized for speed and low latency.
2. **Clarity**: We focus on delivering high-quality, technical content without the bloat.
3. **Interactivity**: Learning is most effective when you can experiment in real-time.

## System Components

### 1. The Execution Engine
Our execution engine is a custom-built terminal emulator that runs directly in the browser. It supports a wide range of programming languages and provides real-time feedback.

### 2. The Visualizer
The visualizer is integrated with the execution engine to provide a real-time view of the heap and the call stack. This helps you understand how your code interacts with the system's memory.

### 3. AI Integration
We use advanced Large Language Models (LLMs) to provide context-aware explanations and debugging assistance. Our AI is trained on a vast dataset of technical documentation and codebases.

## Getting Started

To begin your journey, we recommend starting with the **System Architecture** module in the Tutorials section. This will give you a solid foundation in how modern systems are built.

\`\`\`javascript
const initializeSystem = () => {
  console.log("System Initializing...");
  // Core logic here
  return true;
};
\`\`\`

## Security

Security is a top priority at TERMINAL_LEARN. All code execution happens in a secure, isolated sandbox to protect your system and our infrastructure.

---

*Last updated: March 2026*
`;

const Docs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const sections = [
    { title: "Introduction", items: ["Overview", "Philosophy", "Getting Started"] },
    { title: "Core Architecture", items: ["Execution Engine", "Visualizer", "AI Integration"] },
    { title: "Tutorials", items: ["Module Structure", "Progress Tracking", "Challenges"] },
    { title: "Utilities", items: ["AI Explainer", "Code Fixer", "OCR Tool"] },
    { title: "Community", items: ["Forum Guidelines", "Contributing", "Support"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 flex max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-background transition-transform lg:static lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-full flex flex-col pt-24 lg:pt-8 pb-8 overflow-y-auto">
            <div className="px-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
                <input 
                  type="text" 
                  placeholder="Search docs..."
                  className="w-full h-10 bg-foreground/5 border border-border pl-10 pr-4 text-xs focus:outline-none focus:border-foreground/50 transition-colors"
                />
              </div>
            </div>
            
            <nav className="flex-1 px-6 space-y-8">
              {sections.map((section, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h3 className="font-display text-[10px] font-bold uppercase tracking-widest text-muted">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <a 
                          href="#" 
                          className={cn(
                            "text-sm transition-colors hover:text-foreground",
                            item === "Overview" ? "text-foreground font-bold" : "text-muted"
                          )}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-12 lg:pl-12 max-w-3xl">
          <button 
            className="lg:hidden mb-8 flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="text-xs font-bold uppercase tracking-widest">Menu</span>
          </button>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="markdown-body">
              <ReactMarkdown>{docsContent}</ReactMarkdown>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-border flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Previous</span>
              <a href="#" className="flex items-center gap-2 font-display font-bold hover:text-foreground transition-colors">
                <ChevronRight size={16} className="rotate-180" />
                Introduction
              </a>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Next</span>
              <a href="#" className="flex items-center gap-2 font-display font-bold hover:text-foreground transition-colors">
                Core Architecture
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </main>

        {/* Table of Contents */}
        <aside className="hidden xl:block w-64 py-12 pl-12 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-[10px] font-bold uppercase tracking-widest text-muted">
              On this page
            </h3>
            <ul className="space-y-4 text-xs text-muted border-l border-border pl-4">
              <li><a href="#" className="hover:text-foreground transition-colors">Core Philosophy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">System Components</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Docs;
