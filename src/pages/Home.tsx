import React from "react";
import { Terminal, Code, Cpu, Globe, Zap, ArrowRight, Shield, Layers, Command, X } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const FeatureCard = ({ icon: Icon, title, description, className }: { icon: any, title: string, description: string, className?: string }) => (
  <div className={cn("group relative overflow-hidden border border-border bg-background p-8 transition-all hover:border-foreground/50", className)}>
    <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
      <Icon size={80} />
    </div>
    <div className="relative z-10">
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 font-display text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-background py-24 lg:py-32 overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 border border-border bg-foreground/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-foreground" />
                Now in Beta v2.4.0
              </div>
              <h1 className="font-display text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl leading-[0.9]">
                LEARN <br />
                <span className="text-muted">WITHOUT</span> <br />
                THE BLOAT.
              </h1>
              <p className="max-w-lg text-lg text-muted leading-relaxed">
                A technical learning platform designed for developers who prefer 
                the terminal over the noise. Interactive tutorials, code visualizers, 
                and AI-powered explanations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="h-14 flex items-center justify-center bg-foreground px-8 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-105 active:scale-95">
                  Get Started
                </button>
                <button className="h-14 flex items-center justify-center border border-border px-8 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-foreground/5">
                  View Docs
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-foreground/5 blur-3xl opacity-50" />
              <div className="relative border border-border bg-background p-1 shadow-2xl">
                <div className="flex items-center justify-between border-b border-border bg-foreground/5 px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-border" />
                    <div className="h-2 w-2 rounded-full bg-border" />
                    <div className="h-2 w-2 rounded-full bg-border" />
                  </div>
                  <div className="text-[10px] font-mono text-muted uppercase tracking-widest">tutorial_execution.sh</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-muted select-none">01</span>
                    <span className="text-foreground"><span className="text-muted">const</span> <span className="text-blue-400">visualize</span> = <span className="text-muted">(</span>code<span className="text-muted">)</span> ={">"} <span className="text-muted">{ "{" }</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted select-none">02</span>
                    <span className="pl-4 text-foreground">  <span className="text-muted">const</span> stack = <span className="text-blue-400">analyze</span><span className="text-muted">(</span>code<span className="text-muted">)</span>;</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted select-none">03</span>
                    <span className="pl-4 text-foreground">  <span className="text-muted">return</span> stack.<span className="text-blue-400">render</span><span className="text-muted">()</span>;</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted select-none">04</span>
                    <span className="text-foreground"><span className="text-muted">{ "}" }</span>;</span>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <span className="text-muted select-none">05</span>
                    <span className="text-foreground"><span className="text-muted">// Initializing visualizer...</span></span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted select-none">06</span>
                    <span className="text-foreground"><span className="text-muted">Done. Ready for execution.</span></span>
                  </div>
                  <div className="mt-4 h-1 w-2 bg-foreground animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center gap-4">
            <h2 className="font-display text-4xl font-bold tracking-tighter sm:text-5xl uppercase">
              Core Architecture
            </h2>
            <p className="max-w-2xl text-muted leading-relaxed">
              Everything you need to master complex technical concepts, 
              built with a focus on speed, clarity, and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            <FeatureCard 
              icon={Terminal}
              title="Interactive Terminal"
              description="Execute code directly in the browser with our high-performance terminal emulator."
              className="md:col-span-2"
            />
            <FeatureCard 
              icon={Cpu}
              title="Execution Visualizer"
              description="See how your code works under the hood with real-time heap and stack visualization."
            />
            <FeatureCard 
              icon={Zap}
              title="AI Explainer"
              description="Get instant, context-aware explanations for any code snippet using advanced LLMs."
            />
            <FeatureCard 
              icon={Globe}
              title="Community Forum"
              description="Connect with other developers, share knowledge, and solve problems together."
              className="md:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* No Bloat Section */}
      <section className="py-24 border-y border-border bg-foreground text-background overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="flex flex-col gap-4 rotate-12 scale-150">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="flex gap-4 whitespace-nowrap font-display text-9xl font-black uppercase tracking-tighter opacity-20">
                 NO BLOAT NO BLOAT NO BLOAT NO BLOAT NO BLOAT
               </div>
             ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center gap-12">
            <div className="flex h-20 w-20 items-center justify-center border-4 border-background rounded-full">
              <Shield size={40} />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl uppercase">
                Zero Distractions. <br />
                Pure Knowledge.
              </h2>
              <p className="max-w-2xl mx-auto text-lg opacity-80 leading-relaxed font-medium">
                We stripped away the marketing fluff, the unnecessary animations, 
                and the complex UI. What's left is a focused environment designed 
                for deep work and rapid learning.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              {[
                { label: "NO ADS", icon: X },
                { label: "NO TRACKING", icon: X },
                { label: "NO COOKIES", icon: X },
                { label: "NO BLOAT", icon: X },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-background rounded-full">
                    <item.icon size={20} />
                  </div>
                  <span className="font-display font-bold text-xs uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl uppercase max-w-4xl">
              READY TO UPGRADE <br />
              YOUR SYSTEM?
            </h2>
            <p className="max-w-lg text-muted text-lg">
              Join 50,000+ developers who are already learning 
              the right way. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="h-16 flex items-center justify-center bg-foreground px-12 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-105 active:scale-95">
                Initialize System
              </button>
              <button className="h-16 flex items-center justify-center border border-border px-12 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-foreground/5">
                Join Discord
              </button>
            </div>
            <div className="mt-16 flex items-center gap-8 text-muted font-mono text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Command size={14} />
                <span>CMD + K TO SEARCH</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={14} />
                <span>50+ MODULES</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
