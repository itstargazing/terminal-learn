import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, BookOpen, LayoutDashboard, History, MessageSquare, Wrench, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Tutorials", path: "/tutorials", icon: BookOpen },
    { name: "Docs", path: "/docs", icon: Terminal },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Utilities", path: "/utilities", icon: Wrench },
    { name: "Forum", path: "/forum", icon: MessageSquare },
    { name: "Changelog", path: "/changelog", icon: History },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center bg-foreground text-background transition-transform group-hover:rotate-90">
              <Terminal size={20} />
            </div>
            <span className="font-display text-xl font-bold tracking-tighter">TERMINAL_LEARN</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  location.pathname.startsWith(item.path) ? "text-foreground" : "text-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex h-9 items-center justify-center border border-border px-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background">
            Sign In
          </button>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors",
                    location.pathname.startsWith(item.path) ? "bg-foreground/5 text-foreground" : "text-muted"
                  )}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              ))}
              <button className="mt-4 w-full h-12 flex items-center justify-center border border-border text-xs font-bold uppercase tracking-widest">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
