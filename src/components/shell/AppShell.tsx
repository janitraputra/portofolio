"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ActiveSectionProvider } from "./ActiveSectionContext";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import CommandPalette from "./CommandPalette";

export default function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ActiveSectionProvider>
      <div className="min-h-screen">
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-w)] border-r border-border lg:block">
          <Sidebar />
        </aside>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed inset-y-0 left-0 z-50 w-[80vw] max-w-[var(--sidebar-w)] border-r border-border lg:hidden"
              >
                <Sidebar onNavigate={() => setMobileOpen(false)} />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Tutup menu"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted"
                >
                  <X size={16} />
                </button>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="flex min-h-screen flex-col lg:pl-[var(--sidebar-w)]">
          <TabBar
            onMenuClick={() => setMobileOpen(true)}
            onSearchClick={() => setPaletteOpen(true)}
          />
          <main className="flex-1 pb-12">{children}</main>
        </div>

        <StatusBar />
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </ActiveSectionProvider>
  );
}
