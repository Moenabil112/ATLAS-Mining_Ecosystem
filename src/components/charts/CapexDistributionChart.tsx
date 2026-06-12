import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { capex } from "@/data";

const COLORS = ["#b87333", "#2f5d50", "#cbb084"];

export function CapexDistributionChart() {
  const data = capex.components.map((c) => ({
    name: c.name,
    value: c.valueMad,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
            stroke="#101316"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#14181c",
              border: "1px solid #232a31",
              borderRadius: 8,
              fontSize: 12,
              color: "#ece0cb",
            }}
            formatter={(value: number, name: string) => [
              `${value.toFixed(2)}M MAD`,
              name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 space-y-1">
        {data.map((d, i) => (
          <div
            key={d.name}
            className="flex items-center justify-between text-xs"
          >
            <span className="flex items-center gap-2 text-sand-200/70">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: COLORS[i % COLORS.length] }}
              />
              {d.name}
            </span>
            <span className="font-medium text-sand-100">
              {d.value.toFixed(2)}M MAD
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
