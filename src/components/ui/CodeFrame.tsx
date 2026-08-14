import type { ReactNode } from "react";

export function CodeFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-[#08080d] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
        <div className="window-dots flex gap-1.5">
          <span style={{ background: "#ff5f56" }} />
          <span style={{ background: "#ffbd2e" }} />
          <span style={{ background: "#27c93f" }} />
        </div>
        <span className="ml-2 truncate font-mono text-xs text-muted">
          {title}
        </span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {children}
      </div>
    </div>
  );
}

export function CodeLine({
  n,
  children,
  indent = 0,
}: {
  n: number | string;
  children: ReactNode;
  indent?: number;
}) {
  return (
    <div className="flex">
      <span className="mr-4 w-4 shrink-0 select-none text-right text-syn-comment/70">
        {n}
      </span>
      <span
        className="whitespace-pre-wrap break-words"
        style={{ paddingLeft: `${indent * 1.1}em` }}
      >
        {children}
      </span>
    </div>
  );
}

export const kw = "text-syn-keyword";
export const str = "text-syn-string";
export const num = "text-syn-number";
export const fn = "text-syn-func";
export const cm = "text-syn-comment";
export const tg = "text-syn-tag";
