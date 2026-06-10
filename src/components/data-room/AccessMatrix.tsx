import { useTranslation } from "react-i18next";
import { accessMatrix } from "@/data";
import { cn } from "@/lib/cn";

const cellTone = (value: string) => {
  if (value === "yes") return "text-mineral-300";
  if (value === "summary") return "text-copper-300";
  return "text-sand-300/35";
};

const colKeys = ["public", "qualified", "nda", "restricted", "internal"] as const;

export function AccessMatrix() {
  const { t } = useTranslation();
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-graphite-700/70 text-start">
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-sand-300/55">
              {t("dataRoom.cols.folder")}
            </th>
            {colKeys.map((c) => (
              <th
                key={c}
                className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-sand-300/55"
              >
                {t(`dataRoom.cols.${c}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {accessMatrix.map((row) => (
            <tr
              key={row.folder}
              className="border-b border-graphite-800/70 last:border-0"
            >
              <td className="px-4 py-3 text-sand-100">{row.folder}</td>
              {[row.public, row.qualified, row.nda, row.restricted, row.internal].map(
                (v, i) => (
                  <td
                    key={i}
                    className={cn(
                      "px-4 py-3 text-center text-xs font-medium capitalize",
                      cellTone(v),
                    )}
                  >
                    {v}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
