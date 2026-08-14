"use client";

import { ArrowUp, GitBranch } from "lucide-react";
import { sections } from "@/lib/sections";
import { profile } from "@/lib/data";
import { useActiveSection } from "./ActiveSectionContext";

export default function StatusBar() {
  const active = useActiveSection();
  const activeMeta = sections.find((s) => s.id === active) ?? sections[0];
  const year = new Date().getFullYear();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex h-8 items-center gap-4 border-t border-border bg-accent/95 px-4 font-mono text-[11px] text-white lg:left-[var(--sidebar-w)]">
      <span className="flex items-center gap-1.5">
        <GitBranch size={12} />
        main
      </span>
      <span className="hidden sm:inline opacity-80">TypeScript</span>
      <span className="hidden sm:inline opacity-80">UTF-8</span>
      <span className="opacity-90">
        editing: <strong>{activeMeta.fileName}</strong>
      </span>

      <span className="ml-auto hidden text-white/80 md:inline">
        © {year} {profile.name}
      </span>

      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors hover:bg-white/15"
        aria-label="Kembali ke atas"
      >
        <ArrowUp size={12} />
        <span className="hidden sm:inline">top</span>
      </button>
    </div>
  );
}
