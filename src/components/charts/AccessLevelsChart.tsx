import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataRoomFolders } from "@/data";
import { accessLevelLabel, accessOrder } from "@/lib/accessControl";
import type { AccessLevel } from "@/types";

const color: Record<AccessLevel, string> = {
  "public-teaser": "#4f8a76",
  "qualified-review": "#2f5d50",
  "nda-review": "#b87333",
  "restricted-technical": "#c47b38",
  "internal-only": "#9c5e28",
};

export function AccessLevelsChart() {
  const counts = new Map<AccessLevel, number>();
  for (const folder of dataRoomFolders) {
    for (const doc of folder.documents) {
      counts.set(doc.accessLevel, (counts.get(doc.accessLevel) ?? 0) + 1);
    }
  }
  const data = accessOrder.map((level) => ({
    level,
    label: accessLevelLabel(level),
    count: counts.get(level) ?? 0,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: -16 }}>
          <CartesianGrid stroke="#232a31" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: "#cbb084", fontSize: 10 }}
            angle={-15}
            textAnchor="end"
            height={50}
            interval={0}
          />
          <YAxis allowDecimals={false} tick={{ fill: "#cbb084", fontSize: 11 }} />
          <Tooltip
            cursor={{ fill: "rgba(184,115,51,0.08)" }}
            contentStyle={{
              background: "#14181c",
              border: "1px solid #232a31",
              borderRadius: 8,
              fontSize: 12,
              color: "#ece0cb",
            }}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((d) => (
              <Cell key={d.level} fill={color[d.level]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
