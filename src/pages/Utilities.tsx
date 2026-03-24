import React from "react";
import { Zap, Wrench, Scan, MessageSquare, ChevronRight, Terminal, Code, Cpu, Shield, Layers, Command } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const UtilityCard = ({ icon: Icon, title, description, active, onClick }: { icon: any, title: string, description: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col text-left border border-border p-8 transition-all",
      active ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:border-foreground/50"
    )}
  >
    <div className={cn(
      "mb-6 flex h-12 w-12 items-center justify-center border border-border transition-transform",
      active ? "bg-background text-foreground" : "bg-foreground/5 text-foreground"
    )}>
      <Icon size={24} />
    </div>
    <h3 className="mb-3 font-display text-xl font-bold tracking-tight uppercase">{title}</h3>
    <p className={cn("text-xs leading-relaxed", active ? "text-background/80" : "text-muted")}>
      {description}
    </p>
  </button>
);

const Utilities = () => {
  const [activeUtility, setActiveUtility] = React.useState("explainer");
  const [input, setInput] = React.useState("");
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const handleProcess = () => {
    setIsProcessing(true);
    setResult(null);
    setTimeout(() => {
      setIsProcessing(false);
      setResult("SYSTEM ANALYSIS COMPLETE: The provided code snippet demonstrates a recursive function for calculating the Fibonacci sequence. It has a time complexity of O(2^n) and a space complexity of O(n) due to the call stack.");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border py-16 bg-background relative overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="font-display text-5xl font-bold tracking-tighter uppercase">
              System Utilities
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              A suite of AI-powered tools designed to help you 
              analyze, debug, and understand complex codebases.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UtilityCard 
              icon={Zap}
              title="AI Explainer"
              description="Get instant, context-aware explanations for any code snippet."
              active={activeUtility === "explainer"}
              onClick={() => setActiveUtility("explainer")}
            />
            <UtilityCard 
              icon={Wrench}
              title="Code Fixer"
              description="Diagnose and fix syntax errors, logical bugs, and performance issues."
              active={activeUtility === "fixer"}
              onClick={() => setActiveUtility("fixer")}
            />
            <UtilityCard 
              icon={Scan}
              title="Code OCR"
              description="Extract clean, formatted code from images and screenshots."
              active={activeUtility === "ocr"}
              onClick={() => setActiveUtility("ocr")}
            />
          </div>
        </div>
      </section>

      <section className="py-24 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl font-bold tracking-tighter uppercase">
                  {activeUtility === "explainer" ? "Explain Code" : 
                   activeUtility === "fixer" ? "Fix Code" : "Extract Code"}
                </h2>
                <p className="text-muted leading-relaxed">
                  {activeUtility === "explainer" ? "Paste your code below to get a detailed explanation of how it works." : 
                   activeUtility === "fixer" ? "Paste your buggy code below and we'll help you find and fix the issues." : 
                   "Upload an image or paste a URL to extract code from it."}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative border border-border bg-background p-1 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border bg-foreground/5 px-4 py-2">
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-border" />
                      <div className="h-2 w-2 rounded-full bg-border" />
                      <div className="h-2 w-2 rounded-full bg-border" />
                    </div>
                    <div className="text-[10px] font-mono text-muted uppercase tracking-widest">input_buffer.sh</div>
                  </div>
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={activeUtility === "ocr" ? "Paste image URL here..." : "Paste code here..."}
                    className="w-full h-64 p-6 bg-transparent border-none focus:outline-none resize-none text-foreground font-mono text-sm leading-relaxed"
                    spellCheck={false}
                  />
                </div>
                <button 
                  onClick={handleProcess}
                  disabled={isProcessing || !input}
                  className={cn(
                    "h-14 flex items-center justify-center bg-foreground px-8 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-105 active:scale-95",
                    (isProcessing || !input) && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isProcessing ? "Processing System..." : "Execute Analysis"}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl font-bold tracking-tighter uppercase">
                  Analysis Result
                </h2>
                <div className="border border-border bg-foreground/5 p-8 min-h-[400px] flex flex-col gap-6 relative overflow-hidden">
                  <div className="terminal-grid absolute inset-0 opacity-5 pointer-events-none" />
                  
                  <AnimatePresence mode="wait">
                    {isProcessing ? (
                      <motion.div 
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col items-center justify-center gap-6 text-center"
                      >
                        <div className="relative">
                          <div className="h-16 w-16 border-4 border-foreground/10 rounded-full" />
                          <div className="absolute inset-0 h-16 w-16 border-4 border-foreground border-t-transparent rounded-full animate-spin" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="font-display font-bold text-sm uppercase tracking-widest">Analyzing System...</span>
                          <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Accessing Neural Network</span>
                        </div>
                      </motion.div>
                    ) : result ? (
                      <motion.div 
                        key="result"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-6"
                      >
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                          <Terminal size={12} />
                          Analysis Output
                        </div>
                        <div className="font-mono text-sm leading-relaxed text-foreground">
                          {result}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                          <button className="h-10 flex items-center justify-center border border-border px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/5 transition-colors">
                            Copy Result
                          </button>
                          <button className="h-10 flex items-center justify-center border border-border px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/5 transition-colors">
                            Export PDF
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center opacity-20">
                        <Command size={48} />
                        <span className="font-display font-bold text-sm uppercase tracking-widest">Waiting for Input</span>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border p-6 bg-background flex flex-col gap-3">
                  <h3 className="font-display text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Shield size={14} />
                    Secure Analysis
                  </h3>
                  <p className="text-[10px] text-muted leading-relaxed">
                    Your code is analyzed in a secure, isolated environment 
                    and is never stored on our servers.
                  </p>
                </div>
                <div className="border border-border p-6 bg-background flex flex-col gap-3">
                  <h3 className="font-display text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Zap size={14} />
                    Instant Results
                  </h3>
                  <p className="text-[10px] text-muted leading-relaxed">
                    Powered by the latest LLMs to provide near-instant 
                    feedback and high-quality explanations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utilities;
