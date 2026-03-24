import React from "react";
import { LayoutDashboard, Star, Clock, Zap, BookOpen, ChevronRight, Settings, Bell, Shield, Layers, Terminal, Cpu, History as HistoryIcon, Globe } from "lucide-react";
import { cn } from "../lib/utils";

const StatCard = ({ label, value, icon: Icon, trend }: { label: string, value: string, icon: any, trend?: string }) => (
  <div className="border border-border bg-background p-6 flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className="flex h-10 w-10 items-center justify-center border border-border bg-foreground/5 text-foreground">
        <Icon size={20} />
      </div>
      {trend && (
        <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">
          {trend}
        </span>
      )}
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{label}</span>
      <span className="font-display text-3xl font-bold tracking-tighter">{value}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border py-12 bg-background relative overflow-hidden">
        <div className="terminal-grid absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex items-center gap-8">
              <div className="relative">
                <div className="h-24 w-24 border-2 border-foreground bg-foreground/5 flex items-center justify-center overflow-hidden">
                  <span className="font-display text-4xl font-bold tracking-tighter">DC</span>
                </div>
                <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-foreground text-background flex items-center justify-center border-2 border-background">
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h1 className="font-display text-4xl font-bold tracking-tighter uppercase">
                    Dilara Caliskan
                  </h1>
                  <span className="px-3 py-1 border border-border text-[10px] font-bold uppercase tracking-widest text-muted">
                    Level 12
                  </span>
                </div>
                <p className="text-muted text-sm font-mono uppercase tracking-widest">
                  System Architect • Joined Mar 2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-12 w-12 flex items-center justify-center border border-border hover:bg-foreground/5 transition-colors">
                <Bell size={20} />
              </button>
              <button className="h-12 w-12 flex items-center justify-center border border-border hover:bg-foreground/5 transition-colors">
                <Settings size={20} />
              </button>
              <button className="h-12 flex items-center justify-center bg-foreground px-8 text-xs font-bold uppercase tracking-widest text-background transition-transform hover:scale-105 active:scale-95">
                Initialize Session
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            <StatCard label="Total XP" value="12,450" icon={Zap} trend="+12% WEEKLY" />
            <StatCard label="Modules Completed" value="18" icon={BookOpen} trend="+2 NEW" />
            <StatCard label="Time Learned" value="142h" icon={Clock} trend="+8h WEEKLY" />
            <StatCard label="Global Rank" value="#452" icon={Star} trend="+15 POS" />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Streak Matrix */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <h2 className="font-display text-xl font-bold tracking-tighter uppercase flex items-center gap-3">
                  <HistoryIcon className="text-muted" size={20} />
                  Learning Activity
                </h2>
                <div className="flex items-center gap-4 text-[10px] font-mono text-muted uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-border" />
                    <span>Less</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-foreground" />
                    <span>More</span>
                  </div>
                </div>
              </div>
              <div className="border border-border p-8 bg-background overflow-x-auto">
                <div className="flex flex-col gap-2 min-w-[600px]">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="flex gap-2">
                      {[...Array(52)].map((_, j) => {
                        const intensity = Math.random();
                        return (
                          <div 
                            key={j} 
                            className={cn(
                              "h-3 w-3 transition-colors",
                              intensity > 0.8 ? "bg-foreground" :
                              intensity > 0.5 ? "bg-foreground/60" :
                              intensity > 0.2 ? "bg-foreground/20" :
                              "bg-border"
                            )} 
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between text-[10px] font-mono text-muted uppercase tracking-widest">
                  <span>MAR 2025</span>
                  <span>JUN 2025</span>
                  <span>SEP 2025</span>
                  <span>DEC 2025</span>
                  <span>MAR 2026</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-border p-8 bg-background flex flex-col gap-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    <Layers className="text-muted" size={18} />
                    Current Module
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold tracking-tight">System Architecture</span>
                      <span className="text-xs font-mono text-muted">75%</span>
                    </div>
                    <div className="h-2 w-full bg-border overflow-hidden">
                      <div className="h-full bg-foreground" style={{ width: "75%" }} />
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Next Lesson: Advanced Memory Management and Garbage Collection.
                    </p>
                    <button className="mt-2 h-10 flex items-center justify-center border border-border text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/5 transition-colors">
                      Continue Learning
                    </button>
                  </div>
                </div>

                <div className="border border-border p-8 bg-background flex flex-col gap-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    <Shield className="text-muted" size={18} />
                    System Milestones
                  </h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Memory Master", date: "2 days ago", icon: Cpu },
                      { label: "Network Ninja", date: "1 week ago", icon: Globe },
                    ].map((milestone, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 border border-border bg-foreground/5 flex items-center justify-center">
                            <milestone.icon size={14} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">{milestone.label}</span>
                            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{milestone.date}</span>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-muted" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-xl font-bold tracking-tighter uppercase flex items-center gap-3">
                <Terminal className="text-muted" size={20} />
                System Status
              </h2>
              <div className="flex flex-col gap-px bg-border border border-border">
                <div className="bg-background p-6 flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Active Streak</span>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-5xl font-bold tracking-tighter">14</span>
                    <span className="text-xs font-mono text-muted mb-2">DAYS</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={cn("h-1 flex-1", i < 4 ? "bg-foreground" : "bg-border")} />
                    ))}
                  </div>
                </div>
                <div className="bg-background p-6 flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Learning Matrix</span>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Frontend", value: 85 },
                      { label: "Backend", value: 62 },
                      { label: "DevOps", value: 45 },
                      { label: "Security", value: 30 },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="h-1 w-full bg-border overflow-hidden">
                          <div className="h-full bg-foreground" style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-background p-6 flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Recent Activity</span>
                  <div className="flex flex-col gap-4">
                    {[
                      "Completed Module 01",
                      "Joined 'Memory' Thread",
                      "Solved Challenge #42",
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                        <span className="text-muted">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
