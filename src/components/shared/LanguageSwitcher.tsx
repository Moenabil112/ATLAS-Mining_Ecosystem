import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages, Check, ChevronDown } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@/i18n/config";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ??
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t("language.switch")}
        className={cn(
          "flex items-center gap-1.5 rounded-md border border-graphite-700 bg-graphite-800/70 text-sand-100 transition-colors hover:border-copper-600/50",
          compact ? "px-2 py-1.5 text-xs" : "px-3 py-2 text-sm",
        )}
      >
        <Languages className="h-4 w-4 text-copper-400" />
        <span>{active.nativeLabel}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-sand-300/60 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute end-0 z-50 mt-1 w-40 overflow-hidden rounded-md border border-graphite-700 bg-graphite-900 shadow-panel">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between gap-2 px-3 py-2 text-sm transition-colors hover:bg-graphite-800",
                lang.code === active.code
                  ? "text-sand-50"
                  : "text-sand-200/70",
              )}
            >
              <span className="flex flex-col items-start leading-tight">
                <span>{lang.nativeLabel}</span>
                <span className="text-[10px] text-sand-300/45">
                  {lang.label}
                </span>
              </span>
              {lang.code === active.code && (
                <Check className="h-3.5 w-3.5 text-copper-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
