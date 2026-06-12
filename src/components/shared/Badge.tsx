import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone =
  | "copper"
  | "mineral"
  | "sand"
  | "neutral"
  | "strong"
  | "caution"
  | "warning";

const toneClasses: Record<Tone, string> = {
  copper: "border-copper-600/40 bg-copper-700/15 text-copper-200",
  mineral: "border-mineral-500/40 bg-mineral-700/20 text-mineral-200",
  sand: "border-sand-300/30 bg-sand-300/10 text-sand-200",
  neutral: "border-graphite-600 bg-graphite-800 text-sand-200/80",
  strong: "border-mineral-500/40 bg-mineral-700/20 text-mineral-200",
  caution: "border-copper-600/40 bg-copper-700/15 text-copper-200",
  warning: "border-amber-600/40 bg-amber-700/15 text-amber-200",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  title,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-tight",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
