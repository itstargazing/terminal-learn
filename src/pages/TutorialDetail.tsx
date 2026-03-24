import React from "react";
import { useParams, Link } from "react-router-dom";
import { Terminal, Play, RotateCcw, ChevronLeft, ChevronRight, BookOpen, Cpu, Zap, MessageSquare, Layers, Shield, Command } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const TutorialDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState("explanation");
  const [code, setCode] = React.useState(`const visualize = (code) => {
  const stack = analyze(code);
  return stack.render();
};

// Initializing visualizer...
// Done. Ready for execution.`);

  const [isExecuting, setIsExecuting] = React.useState(false);

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-background overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-md z-40">
        <div className="flex items-center gap-4">
          <Link to="/tutorials" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
            <ChevronLeft size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Modules</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <h1 className="font-display text-sm font-bold tracking-tight uppercase">
            Module 01: System Architecture
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            System Online
          </div>
          <button className="h-9 flex items-center justify-center border border-border px-4 text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-foreground/5">
            Save Progress
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Code Editor */}
        <div className="flex-1 flex flex-col border-r border-border bg-background">
          <div className="h-10 border-b border-border flex items-center justify-between px-4 bg-foreground/5">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-muted" />
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">tutorial_execution.js</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleExecute}
                disabled={isExecuting}
                className={cn(
                  "h-7 flex items-center justify-center gap-2 px-3 text-[10px] font-bold uppercase tracking-widest transition-all",
                  isExecuting ? "bg-muted text-background" : "bg-foreground text-background hover:scale-105"
                )}
              >
                {isExecuting ? <RotateCcw size={12} className="animate-spin" /> : <Play size={12} />}
                {isExecuting ? "Executing..." : "Run Code"}
              </button>
            </div>
          </div>
          <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-auto">
            <textarea 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent border-none focus:outline-none resize-none text-foreground placeholder-muted"
              spellCheck={false}
            />
          </div>
          <div className="h-32 border-t border-border bg-foreground/5 p-4 font-mono text-xs overflow-auto">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-muted">
                <span>[10:42:39]</span>
                <span>SYSTEM INITIALIZED</span>
              </div>
              <div className="flex gap-2 text-muted">
                <span>[10:42:40]</span>
                <span>READY FOR INPUT</span>
              </div>
              {isExecuting && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 text-green-500"
                >
                  <span>[10:42:41]</span>
                  <span>EXECUTING MODULE...</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Explanation Panel */}
        <div className="w-[450px] flex flex-col bg-background">
          <div className="h-10 border-b border-border flex items-center px-1 bg-foreground/5">
            {[
              { id: "explanation", icon: BookOpen, label: "Explanation" },
              { id: "visualizer", icon: Cpu, label: "Visualizer" },
              { id: "ai", icon: Zap, label: "AI Help" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "h-full px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all",
                  activeTab === tab.id 
                    ? "border-foreground text-foreground bg-background" 
                    : "border-transparent text-muted hover:text-foreground"
                )}
              >
                <tab.icon size={12} />
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-auto p-8">
            <AnimatePresence mode="wait">
              {activeTab === "explanation" && (
                <motion.div
                  key="explanation"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-4">
                    <h2 className="font-display text-2xl font-bold tracking-tight uppercase">
                      Memory Management
                    </h2>
                    <p className="text-muted leading-relaxed">
                      In this lesson, we'll explore how modern systems manage memory 
                      allocation and deallocation. Understanding the heap and the stack 
                      is crucial for writing efficient code.
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="p-4 border border-border bg-foreground/5 flex flex-col gap-3">
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        <Shield size={14} />
                        Key Concept: The Stack
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        The stack is a region of memory that stores temporary variables 
                        created by functions. It works on a LIFO (Last In, First Out) basis.
                      </p>
                    </div>

                    <div className="p-4 border border-border bg-foreground/5 flex flex-col gap-3">
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        <Layers size={14} />
                        Key Concept: The Heap
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        The heap is a region of memory used for dynamic memory allocation. 
                        Unlike the stack, memory in the heap must be manually managed or 
                        handled by a garbage collector.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest">
                      Your Task
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Modify the code on the left to include a function that allocates 
                      memory on the heap and then releases it. Use the visualizer tab 
                       to see the changes in real-time.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "visualizer" && (
                <motion.div
                  key="visualizer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-4">
                    <h2 className="font-display text-2xl font-bold tracking-tight uppercase">
                      Execution Flow
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[10px] font-mono text-muted uppercase tracking-widest border-b border-border pb-2">Call Stack</h3>
                        <div className="flex flex-col gap-2">
                          {["main()", "analyze()", "render()"].map((func, i) => (
                            <div key={i} className="h-10 border border-border bg-foreground/5 flex items-center px-3 text-xs font-mono">
                              {func}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[10px] font-mono text-muted uppercase tracking-widest border-b border-border pb-2">Heap Variables</h3>
                        <div className="flex flex-col gap-2">
                          {["obj_0x123", "arr_0x456"].map((v, i) => (
                            <div key={i} className="h-10 border border-border bg-foreground/5 flex items-center px-3 text-xs font-mono">
                              {v}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 border border-border bg-foreground/5 flex flex-col items-center justify-center gap-4 text-center">
                    <Cpu size={40} className="text-muted opacity-20" />
                    <p className="text-xs text-muted font-mono uppercase tracking-widest">
                      Real-time visualization <br /> active during execution
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "ai" && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <h2 className="font-display text-2xl font-bold tracking-tight uppercase">
                        AI Assistant
                      </h2>
                      <p className="text-muted leading-relaxed">
                        Ask our AI for help with the current lesson or any code snippet.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 overflow-auto max-h-[400px]">
                      <div className="p-4 border border-border bg-foreground/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                          <Zap size={12} />
                          Assistant
                        </div>
                        <p className="text-xs leading-relaxed">
                          Hello! I'm here to help you with the System Architecture module. 
                          What would you like to know about memory management?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Ask a question..."
                        className="w-full h-12 bg-foreground/5 border border-border px-4 pr-12 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-foreground text-background">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="h-14 border-t border-border flex items-center justify-between px-6 bg-background">
            <button className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <ChevronLeft size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Previous</span>
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={cn("h-1 w-4", i === 1 ? "bg-foreground" : "bg-border")} />
              ))}
            </div>
            <button className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
