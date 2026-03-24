import React from "react";
import { MessageSquare, Search, Filter, ChevronRight, Star, Clock, User, Terminal, Cpu, Globe, Zap, Shield, Layers, Command } from "lucide-react";
import { cn } from "../lib/utils";

const threads = [
  {
    id: "t1",
    title: "Understanding Memory Management in C++",
    author: "Alex Dev",
    category: "System Architecture",
    replies: 42,
    views: 1250,
    lastActivity: "2h ago",
    isPinned: true,
  },
  {
    id: "t2",
    title: "Best practices for WebSockets in high-traffic apps",
    author: "Sarah Smith",
    category: "Network Protocols",
    replies: 18,
    views: 850,
    lastActivity: "5h ago",
    isPinned: false,
  },
  {
    id: "t3",
    title: "Mastering Dynamic Programming: A Guide",
    author: "John Doe",
    category: "Algorithms",
    replies: 24,
    views: 1050,
    lastActivity: "1d ago",
    isPinned: false,
  },
  {
    id: "t4",
    title: "Encryption vs Hashing: What's the difference?",
    author: "Jane Smith",
    category: "Security",
    replies: 12,
    views: 450,
    lastActivity: "2d ago",
    isPinned: false,
  },
  {
    id: "t5",
    title: "Optimizing Database Queries for Large Datasets",
    author: "Bob Brown",
    category: "Databases",
    replies: 30,
    views: 1550,
    lastActivity: "3d ago",
    isPinned: false,
  },
];

const Forum = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredThreads = threads.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border py-16 bg-background relative overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-6 max-w-2xl">
              <h1 className="font-display text-5xl font-bold tracking-tighter uppercase">
                Community Forum
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Connect with other developers, share knowledge, 
                and solve complex technical problems together.
              </p>
            </div>
            <button className="h-14 flex items-center justify-center bg-foreground px-8 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-105 active:scale-95">
              New Thread
            </button>
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
                placeholder="Search threads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-foreground/5 border border-border pl-12 pr-4 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {["All", "System Architecture", "Network Protocols", "Algorithms", "Security", "Databases"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "h-10 px-6 text-xs font-bold uppercase tracking-widest border transition-all whitespace-nowrap",
                    activeCategory === category 
                      ? "bg-foreground text-background border-foreground" 
                      : "border-border text-muted hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col border border-border bg-background">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 border-b border-border bg-foreground/5 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted">
              <div className="col-span-6">Thread</div>
              <div className="col-span-2 text-center">Category</div>
              <div className="col-span-2 text-center">Stats</div>
              <div className="col-span-2 text-right">Last Activity</div>
            </div>

            {/* Thread List */}
            <div className="flex flex-col">
              {filteredThreads.map((thread) => (
                <div 
                  key={thread.id}
                  className="grid grid-cols-1 md:grid-cols-12 border-b border-border last:border-none px-8 py-6 transition-colors hover:bg-foreground/5 cursor-pointer group"
                >
                  <div className="col-span-1 md:col-span-6 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      {thread.isPinned && (
                        <div className="flex h-5 w-5 items-center justify-center bg-foreground text-background rounded-full">
                          <Star size={10} fill="currentColor" />
                        </div>
                      )}
                      <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-foreground transition-colors">
                        {thread.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-muted uppercase tracking-widest">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{thread.author}</span>
                      </div>
                      <div className="h-1 w-1 rounded-full bg-border" />
                      <span>{thread.replies} Replies</span>
                    </div>
                  </div>

                  <div className="hidden md:flex col-span-2 items-center justify-center">
                    <span className="px-3 py-1 border border-border text-[10px] font-bold uppercase tracking-widest text-muted">
                      {thread.category}
                    </span>
                  </div>

                  <div className="hidden md:flex col-span-2 items-center justify-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-foreground font-bold">{thread.views}</span>
                      <span>Views</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-foreground font-bold">{thread.replies}</span>
                      <span>Replies</span>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex items-center justify-end gap-3 text-[10px] font-mono text-muted uppercase tracking-widest mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Clock size={12} />
                      <span>{thread.lastActivity}</span>
                    </div>
                    <ChevronRight size={16} className="text-muted group-hover:text-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
              Showing {filteredThreads.length} of {threads.length} threads
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <button 
                  key={i}
                  className={cn(
                    "h-10 w-10 flex items-center justify-center border border-border text-[10px] font-bold uppercase tracking-widest transition-all",
                    i === 1 ? "bg-foreground text-background border-foreground" : "text-muted hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forum;
