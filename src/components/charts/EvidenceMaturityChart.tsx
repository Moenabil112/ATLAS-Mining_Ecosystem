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
import { dashboardMetrics } from "@/evidence-base";

const colorByKey: Record<string, string> = {
  documented: "#2f5d50",
  selected_sample: "#b87333",
  preliminary: "#cbb084",
  requires_correction: "#c0532f",
};

const labelByKey: Record<string, string> = {
  documented: "Documented",
  selected_sample: "Selected sample",
  preliminary: "Preliminary",
  requires_correction: "Requires correction",
};

/** Evidence maturity distribution across the 51 registered numbers. */
export function EvidenceMaturityChart() {
  const data = Object.entries(dashboardMetrics.evidence_maturity_count).map(
    ([key, count]) => ({ key, label: labelByKey[key] ?? key, count }),
  );

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: -16 }}>
          <CartesianGrid stroke="#232a31" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: "#cbb084", fontSize: 10 }}
            angle={-12}
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
              <Cell key={d.key} fill={colorByKey[d.key] ?? "#b87333"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
