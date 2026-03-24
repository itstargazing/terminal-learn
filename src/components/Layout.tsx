import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="grain-overlay" />
      <div className="scanline" />
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="border-t border-border py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-6 w-6 items-center justify-center bg-foreground text-background">
                  <span className="font-bold text-xs">T</span>
                </div>
                <span className="font-display font-bold tracking-tighter">TERMINAL_LEARN</span>
              </div>
              <p className="text-muted text-sm max-w-xs leading-relaxed">
                The technical learning platform for modern developers. 
                Built for those who prefer the terminal over the bloat.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-muted">
                <li><a href="#" className="hover:text-foreground transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Utilities</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-muted">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted font-mono">
              © {new Date().getFullYear()} TERMINAL_LEARN. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 text-xs text-muted font-mono">
              <a href="#" className="hover:text-foreground transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-foreground transition-colors">TERMS</a>
              <a href="#" className="hover:text-foreground transition-colors">STATUS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
