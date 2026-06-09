import { NavLink } from "react-router-dom";
import { navItems } from "./nav";
import { cn } from "@/lib/cn";

export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-graphite-700/70 bg-graphite-900/95 backdrop-blur lg:hidden">
      <div className="flex overflow-x-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex min-w-[4.25rem] flex-1 flex-col items-center gap-1 px-1 py-2 text-[10px] transition-colors",
                isActive ? "text-copper-300" : "text-sand-300/60",
              )
            }
          >
            <item.icon className="h-4 w-4" />
            <span className="whitespace-nowrap">{item.mobileLabel}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
