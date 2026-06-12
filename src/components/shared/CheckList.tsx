import { Check, X } from "lucide-react";
import { cn } from "@/lib/cn";

export function CheckList({
  items,
  variant = "include",
}: {
  items: string[];
  variant?: "include" | "exclude";
}) {
  const isInclude = variant === "include";
  const Icon = isInclude ? Check : X;
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm">
          <Icon
            className={cn(
              "mt-0.5 h-4 w-4 shrink-0",
              isInclude ? "text-mineral-400" : "text-copper-400",
            )}
          />
          <span className="text-sand-200/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}
