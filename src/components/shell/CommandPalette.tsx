"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CornerDownLeft, Mail, Search } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { sections } from "@/lib/sections";
import { profile } from "@/lib/data";
import { goToSection } from "./ActiveSectionContext";

type Command = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

const commands: Command[] = [
  ...sections.map((s) => ({
    id: s.id,
    label: `Buka ${s.fileName}`,
    hint: s.label,
    action: () => goToSection(s.id),
  })),
  {
    id: "email",
    label: "Kirim email",
    hint: profile.email,
    action: () => window.open(`mailto:${profile.email}`, "_self"),
  },
  {
    id: "github",
    label: "Buka GitHub",
    hint: profile.github.replace("https://", ""),
    action: () => window.open(profile.github, "_blank"),
  },
  {
    id: "linkedin",
    label: "Buka LinkedIn",
    hint: "LinkedIn profile",
    action: () => window.open(profile.linkedin, "_blank"),
  },
];

function PaletteContent({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runCommand = (cmd: Command) => {
    cmd.action();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <Search size={16} className="text-muted" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCursor(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setCursor((c) => Math.min(c + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setCursor((c) => Math.max(c - 1, 0));
            } else if (e.key === "Enter" && filtered[cursor]) {
              runCommand(filtered[cursor]);
            } else if (e.key === "Escape") {
              onClose();
            }
          }}
          placeholder="Cari section atau perintah..."
          className="w-full bg-transparent font-mono text-sm text-foreground placeholder:text-muted focus:outline-none"
        />
        <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
          Esc
        </kbd>
      </div>

      <ul className="max-h-72 overflow-y-auto p-2">
        {filtered.length === 0 && (
          <li className="px-3 py-6 text-center text-sm text-muted">
            Tidak ada hasil.
          </li>
        )}
        {filtered.map((cmd, i) => (
          <li key={cmd.id}>
            <button
              onMouseEnter={() => setCursor(i)}
              onClick={() => runCommand(cmd)}
              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                cursor === i ? "bg-surface-2 text-foreground" : "text-muted"
              }`}
            >
              <span className="flex items-center gap-2.5">
                {cmd.id === "email" && <Mail size={14} />}
                {cmd.id === "github" && <GithubIcon size={14} />}
                {cmd.id === "linkedin" && <LinkedinIcon size={14} />}
                {cmd.label}
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                {cmd.hint}
                {cursor === i && <CornerDownLeft size={12} />}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
          onClick={onClose}
        >
          <PaletteContent onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
