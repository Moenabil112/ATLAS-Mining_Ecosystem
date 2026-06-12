import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function SectionHeader({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-graphite-700 bg-graphite-800 text-copper-400">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <div>
          <h2 className="text-base font-semibold tracking-tight text-sand-50">
            {title}
          </h2>
          {description && (
            <p className="mt-1 max-w-2xl text-sm text-sand-200/60">
              {description}
            </p>
          )}
        </div>
      </div>
      {action}
    </div>
  );
}
