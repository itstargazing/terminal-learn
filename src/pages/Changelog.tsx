import React from "react";
import { History as HistoryIcon, Zap, Shield, Layers, Terminal, Cpu, Globe, Zap as ZapIcon, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const Changelog = () => {
  const updates = [
    {
      version: "v2.4.0",
      date: "Mar 20, 2026",
      title: "The AI Revolution",
      description: "Major update to our AI Explainer and Code Fixer tools. Now powered by the latest Gemini 3.1 Pro models.",
      changes: [
        "Integrated Gemini 3.1 Pro for enhanced code analysis.",
        "Added support for 15+ new programming languages in the visualizer.",
        "Improved OCR accuracy for handwritten code snippets.",
        "New 'System Architecture' module in Tutorials.",
      ],
      type: "Major",
    },
    {
      version: "v2.3.5",
      date: "Feb 12, 2026",
      title: "Performance Optimization",
      description: "Under-the-hood improvements to the execution engine and terminal emulator.",
      changes: [
        "Reduced terminal latency by 40%.",
        "Optimized memory usage for long-running scripts.",
        "Fixed a bug in the heap visualizer for recursive functions.",
      ],
      type: "Minor",
    },
    {
      version: "v2.3.0",
      date: "Jan 05, 2026",
      title: "Community & Collaboration",
      description: "Introducing the new Community Forum and collaborative learning features.",
      changes: [
        "Launched the TERMINAL_LEARN Forum.",
        "Added 'Share Progress' feature to the Dashboard.",
        "New user profile customization options.",
      ],
      type: "Major",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border py-24 bg-background relative overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-6 max-w-2xl text-center mx-auto">
            <h1 className="font-display text-6xl font-bold tracking-tighter uppercase">
              System Changelog
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              A chronological record of system updates, 
              feature releases, and architectural improvements.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {updates.map((update, i) => (
              <div key={i} className="relative pl-12 border-l border-border">
                <div className="absolute left-0 top-0 -translate-x-1/2 flex h-8 w-8 items-center justify-center border-2 border-background bg-foreground text-background rounded-full">
                  <ZapIcon size={14} fill="currentColor" />
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 border border-border text-[10px] font-bold uppercase tracking-widest text-muted">
                        {update.version}
                      </span>
                      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                        {update.date}
                      </span>
                      <div className={cn(
                        "px-3 py-1 text-[10px] font-bold uppercase tracking-widest border",
                        update.type === "Major" ? "border-foreground text-foreground" : "border-border text-muted"
                      )}>
                        {update.type}
                      </div>
                    </div>
                    <h2 className="font-display text-4xl font-bold tracking-tighter uppercase">
                      {update.title}
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                      {update.description}
                    </p>
                  </div>

                  <div className="border border-border bg-foreground/5 p-8 flex flex-col gap-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                      <Terminal className="text-muted" size={18} />
                      Key Changes
                    </h3>
                    <ul className="space-y-4">
                      {update.changes.map((change, j) => (
                        <li key={j} className="flex items-start gap-4 text-sm text-muted leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-border flex flex-col items-center gap-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center border border-border bg-foreground/5 text-muted">
              <HistoryIcon size={32} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-xl font-bold tracking-tighter uppercase">
                End of Records
              </h3>
              <p className="text-muted text-sm max-w-xs">
                You've reached the beginning of our journey. 
                Stay tuned for more updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Changelog;
