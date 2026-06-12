import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h1 className="text-2xl font-semibold tracking-tight text-sand-50 sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-sand-200/70">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      <div className="copper-rule mt-6" />
    </header>
  );
}
