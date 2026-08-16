import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 18,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("label-tech flex items-center gap-3", className)}>
      <span className="signal-dot shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export function SectionRule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-hairline", className)} />;
}

export function CTA({
  children,
  variant = "primary",
  href = "#book",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 px-5 py-3 text-sm transition-all duration-300",
        variant === "primary"
          ? "bg-foreground text-background hover:bg-signal"
          : "border border-border text-foreground hover:border-signal hover:text-signal",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("font-mono text-xs tracking-wider", className)}>{children}</span>;
}
