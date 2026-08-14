"use client";

import { Menu, Search } from "lucide-react";
import { sections } from "@/lib/sections";
import { useActiveSection, goToSection } from "./ActiveSectionContext";

export default function TabBar({
  onMenuClick,
  onSearchClick,
}: {
  onMenuClick: () => void;
  onSearchClick: () => void;
}) {
  const active = useActiveSection();
  const activeMeta = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <div className="sticky top-0 z-40 flex h-12 items-center border-b border-border bg-background/80 backdrop-blur-md">
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="flex h-full w-12 shrink-0 items-center justify-center text-muted hover:text-foreground lg:hidden"
      >
        <Menu size={18} />
      </button>

      <div className="hidden h-full flex-1 overflow-x-auto lg:flex">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => goToSection(s.id)}
              className={`flex h-full items-center gap-2 border-r border-border px-4 font-mono text-xs transition-colors ${
                isActive
                  ? "bg-surface text-foreground"
                  : "text-muted hover:bg-surface/50 hover:text-foreground"
              }`}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: s.color }}
              />
              {s.fileName}
            </button>
          );
        })}
      </div>

      <div className="flex flex-1 items-center px-4 font-mono text-xs text-muted lg:hidden">
        <span
          className="mr-2 h-1.5 w-1.5 rounded-full"
          style={{ background: activeMeta.color }}
        />
        {activeMeta.fileName}
      </div>

      <button
        onClick={onSearchClick}
        className="mr-3 flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-muted transition-colors hover:border-accent hover:text-foreground"
        aria-label="Open command palette"
      >
        <Search size={13} />
        <span className="hidden font-mono text-[11px] sm:inline">
          Ctrl K
        </span>
      </button>
    </div>
  );
}
