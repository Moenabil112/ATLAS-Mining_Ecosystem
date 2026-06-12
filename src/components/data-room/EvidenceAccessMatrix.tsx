import { useTranslation } from "react-i18next";
import { accessControlMatrix } from "@/evidence-base";
import { accessLevelLabel } from "@/lib/accessControl";
import { cn } from "@/lib/cn";
import type { AccessLevel } from "@/types";

const cellTone = (value: string) => {
  if (value === "yes") return "text-mineral-300";
  if (value === "summary") return "text-copper-300";
  return "text-sand-300/30";
};

/** Access control matrix from the evidence base (6 disclosure tiers × items). */
export function EvidenceAccessMatrix() {
  const { t } = useTranslation();
  const { levels, matrix } = accessControlMatrix;
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[760px] text-sm">
        <thead>
          <tr className="border-b border-graphite-700/70 text-start">
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-sand-300/55">
              {t("dataRoom.cols.folder")}
            </th>
            {levels.map((lvl) => (
              <th
                key={lvl}
                className="px-3 py-3 text-center text-[10px] font-medium uppercase tracking-wide text-sand-300/55"
              >
                {t(`status.access.${lvl}`, accessLevelLabel(lvl as AccessLevel))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row) => (
            <tr
              key={row.item}
              className="border-b border-graphite-800/70 last:border-0"
            >
              <td className="px-4 py-3 text-sand-100">{row.item}</td>
              {levels.map((lvl) => (
                <td
                  key={lvl}
                  className={cn(
                    "px-3 py-3 text-center text-[11px] font-medium capitalize",
                    cellTone(row.levels[lvl]),
                  )}
                >
                  {row.levels[lvl]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
