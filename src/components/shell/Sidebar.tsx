"use client";

import { motion } from "framer-motion";
import { Folder, FolderOpen, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { sections } from "@/lib/sections";
import { profile } from "@/lib/data";
import { useActiveSection, goToSection } from "./ActiveSectionContext";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function Sidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const active = useActiveSection();

  return (
    <div className="flex h-full flex-col bg-surface">
      <div className="flex items-center gap-3 border-b border-border px-5 py-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border">
          <ProfilePhoto initials="CA" />
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-foreground">
            {profile.name.split(" ").slice(0, 2).join(" ")}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-2" />
            </span>
            available for work
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-2 font-mono text-[11px] tracking-widest text-muted">
          EXPLORER
        </p>

        <div className="mt-2 flex items-center gap-1.5 px-2 py-1.5 text-xs text-muted">
          <FolderOpen size={14} className="text-accent-2" />
          <span className="font-mono">portofolio</span>
        </div>

        <ul className="mt-1 space-y-0.5 border-l border-border pl-3">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => {
                    goToSection(s.id);
                    onNavigate?.();
                  }}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left font-mono text-sm transition-colors ${
                    isActive
                      ? "bg-surface-2 text-foreground"
                      : "text-muted hover:bg-surface-2/60 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active-bar"
                      className="absolute -left-3 top-1/2 h-4 w-[2px] -translate-y-1/2 bg-accent-2"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: s.color }}
                  >
                    {s.ext}
                  </span>
                  <span className="truncate">{s.fileName}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex items-center gap-1.5 px-2 py-1.5 text-xs text-muted">
          <Folder size={14} />
          <span className="font-mono">node_modules</span>
          <span className="ml-auto font-mono text-[10px] opacity-50">
            2.3k
          </span>
        </div>
      </nav>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={14} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={14} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={14} />
          </a>
          <span className="ml-auto font-mono text-[10px] text-muted">
            v2025.1
          </span>
        </div>
      </div>
    </div>
  );
}
