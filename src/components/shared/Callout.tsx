import type { ReactNode } from "react";
import { AlertTriangle, Info, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "info" | "warning" | "success";

const styles: Record<Variant, { wrap: string; icon: typeof Info; iconColor: string }> = {
  info: {
    wrap: "border-copper-600/30 bg-copper-700/10",
    icon: Info,
    iconColor: "text-copper-300",
  },
  warning: {
    wrap: "border-amber-600/30 bg-amber-700/10",
    icon: AlertTriangle,
    iconColor: "text-amber-300",
  },
  success: {
    wrap: "border-mineral-500/30 bg-mineral-700/15",
    icon: ShieldCheck,
    iconColor: "text-mineral-300",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[variant];
  const Icon = s.icon;
  return (
    <div className={cn("rounded-lg border p-4", s.wrap)}>
      <div className="flex items-start gap-3">
        <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", s.iconColor)} />
        <div className="text-sm leading-relaxed text-sand-200/85">
          {title && (
            <p className="mb-1 font-medium text-sand-50">{title}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
