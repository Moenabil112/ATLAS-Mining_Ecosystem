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
import { evidenceMaturityDistribution } from "@/lib/evidence";

const toneColor: Record<string, string> = {
  "document-supported": "#2f5d50",
  "field-observed": "#4f8a76",
  "assay-supported": "#b87333",
  "preliminary-assumption": "#cbb084",
  "requires-validation": "#c47b38",
};

export function EvidenceMaturityChart() {
  const data = evidenceMaturityDistribution();
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
              <Cell key={d.status} fill={toneColor[d.status] ?? "#b87333"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
