import React from "react";
import { BookOpen, Clock, Star, ChevronRight, Search, Filter, Terminal, Cpu, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const modules = [
  {
    id: "m1",
    title: "System Architecture",
    description: "Learn how modern systems are built from the ground up, covering memory management, CPU cycles, and I/O operations.",
    level: "Beginner",
    duration: "4h 30m",
    rating: 4.9,
    icon: Cpu,
    lessons: 12,
    progress: 0,
  },
  {
    id: "m2",
    title: "Network Protocols",
    description: "Deep dive into TCP/IP, HTTP/3, and WebSockets. Understand how data travels across the global network.",
    level: "Intermediate",
    duration: "6h 15m",
    rating: 4.8,
    icon: Globe,
    lessons: 18,
    progress: 45,
  },
  {
    id: "m3",
    title: "Advanced Algorithms",
    description: "Master complex data structures and algorithms. From graph theory to dynamic programming.",
    level: "Advanced",
    duration: "10h 00m",
    rating: 5.0,
    icon: Zap,
    lessons: 24,
    progress: 10,
  },
  {
    id: "m4",
    title: "Security Fundamentals",
    description: "Learn the basics of cybersecurity, encryption, and how to protect your systems from common attacks.",
    level: "Beginner",
    duration: "3h 45m",
    rating: 4.7,
    icon: Terminal,
    lessons: 10,
    progress: 0,
  },
  {
    id: "m5",
    title: "Database Internals",
    description: "Understand how databases work under the hood. Indexing, query optimization, and transaction management.",
    level: "Intermediate",
    duration: "8h 20m",
    rating: 4.9,
    icon: BookOpen,
    lessons: 20,
    progress: 0,
  },
];

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredModules = modules.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         m.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || m.level === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border py-16 bg-background relative overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="font-display text-5xl font-bold tracking-tighter uppercase">
              Tutorial Modules
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Structured learning paths designed to take you from 
              foundational concepts to advanced system engineering.
            </p>
          </div>
        </div>
      </header>

      <section className="py-8 border-b border-border sticky top-16 bg-background/80 backdrop-blur-md z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-foreground/5 border border-border pl-12 pr-4 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "h-10 px-6 text-xs font-bold uppercase tracking-widest border transition-all whitespace-nowrap",
                    activeFilter === filter 
                      ? "bg-foreground text-background border-foreground" 
                      : "border-border text-muted hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module) => (
              <Link 
                key={module.id}
                to={`/tutorials/${module.id}`}
                className="group flex flex-col border border-border bg-background transition-all hover:border-foreground/50"
              >
                <div className="p-8 flex-1 flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="flex h-12 w-12 items-center justify-center border border-border bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
                      <module.icon size={24} />
                    </div>
                    <div className={cn(
                      "px-3 py-1 text-[10px] font-bold uppercase tracking-widest border",
                      module.level === "Beginner" ? "border-green-500/50 text-green-500" :
                      module.level === "Intermediate" ? "border-yellow-500/50 text-yellow-500" :
                      "border-red-500/50 text-red-500"
                    )}>
                      {module.level}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight group-hover:text-foreground transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">
                      {module.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest mt-auto">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} />
                      <span>{module.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span>{module.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border p-4 flex items-center justify-between bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                  <div className="flex-1 mr-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Progress</span>
                      <span className="text-[10px] font-mono text-foreground uppercase tracking-widest">{module.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-border overflow-hidden">
                      <div 
                        className="h-full bg-foreground transition-all duration-500" 
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-muted group-hover:text-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
