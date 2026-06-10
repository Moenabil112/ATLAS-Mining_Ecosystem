import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navItems } from "./nav";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { cn } from "@/lib/cn";

export function SidebarNav() {
  const { t } = useTranslation();
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-e border-graphite-700/70 bg-graphite-900/60 lg:flex">
      <div className="flex items-center gap-3 px-5 py-5">
        <img src="/atlas-mark.svg" alt="Atlas Mining" className="h-9 w-9" />
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight text-sand-50">
            {t("brand.name")}
          </div>
          <div className="text-[11px] text-sand-300/70">
            {t("brand.subtitle")}
          </div>
        </div>
      </div>
      <div className="copper-rule mx-5" />
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-graphite-800 text-sand-50 shadow-copper"
                  : "text-sand-200/70 hover:bg-graphite-800/60 hover:text-sand-100",
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    isActive ? "text-copper-400" : "text-sand-300/50",
                  )}
                />
                <span>{t(`nav.${item.key}`)}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="space-y-3 border-t border-graphite-700/70 px-5 py-4">
        <LanguageSwitcher />
        <p className="text-[10px] leading-relaxed text-sand-300/50">
          {t("common.footerNote")}
        </p>
      </div>
    </aside>
  );
}
