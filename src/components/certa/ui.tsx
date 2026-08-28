import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const DEMO_LINK = "https://calendly.com/certasystems/demo";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("border border-border bg-surface", className)}>{children}</div>
  );
}

export function CardRow({
  k,
  v,
  tone = "default",
}: {
  k: string;
  v: ReactNode;
  tone?: "default" | "signal" | "risk" | "ok" | "muted";
}) {
  const color =
    tone === "signal"
      ? "text-signal"
      : tone === "risk"
        ? "text-risk"
        : tone === "ok"
          ? "text-ok"
          : tone === "muted"
            ? "text-muted-foreground"
            : "text-foreground";
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-hairline px-5 py-3 last:border-b-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {k}
      </span>
      <span className={cn("text-right text-[13px]", color)}>{v}</span>
    </div>
  );
}

export function Pill({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "signal" | "risk" | "ok";
}) {
  const styles = {
    muted: "border-border text-muted-foreground",
    signal: "border-signal/40 text-signal",
    risk: "border-risk/45 text-risk",
    ok: "border-ok/40 text-ok",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
        styles,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  className,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <div className="label-tech mb-5">{eyebrow}</div> : null}
      <h2 className="display-lg">{title}</h2>
      {copy ? (
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">{copy}</p>
      ) : null}
    </div>
  );
}
