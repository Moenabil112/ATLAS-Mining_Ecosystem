import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { SidebarNav } from "./SidebarNav";
import { MobileNav } from "./MobileNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-graphite-950">
      <SidebarNav />
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile header */}
        <header className="flex items-center justify-between border-b border-graphite-700/70 bg-graphite-900/70 px-4 py-3 lg:hidden">
          <div className="flex items-center gap-2">
            <img src="/atlas-mark.svg" alt="Atlas Mining" className="h-7 w-7" />
            <span className="text-sm font-semibold text-sand-50">
              ATLAS Isseksi
            </span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-sand-300/60">
            <Lock className="h-3 w-3" /> Confidential
          </span>
        </header>

        <main className="flex-1 px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-12">
          <div className="mx-auto w-full max-w-6xl animate-fade-in">
            {children}
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
