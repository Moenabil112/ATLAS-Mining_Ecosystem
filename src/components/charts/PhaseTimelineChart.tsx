import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { roadmapPhases } from "@/data";

/** Horizontal phase timeline: each phase spans a 30-day window across 180 days. */
export function PhaseTimelineChart() {
  const data = roadmapPhases.map((p) => {
    const [start, end] = p.days.split("–").map((n) => parseInt(n, 10));
    return {
      name: `P${p.phase}`,
      title: p.title,
      start,
      duration: end - start,
      window: p.days,
    };
  });

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 8, right: 16, bottom: 8, left: 8 }}
          barCategoryGap={10}
        >
          <CartesianGrid stroke="#232a31" strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 180]}
            ticks={[0, 30, 60, 90, 120, 150, 180]}
            tick={{ fill: "#cbb084", fontSize: 11 }}
            label={{
              value: "Days",
              position: "insideBottom",
              offset: -2,
              fill: "#b89a6a",
              fontSize: 11,
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#cbb084", fontSize: 11 }}
            width={32}
          />
          <Tooltip
            cursor={{ fill: "rgba(184,115,51,0.08)" }}
            contentStyle={{
              background: "#14181c",
              border: "1px solid #232a31",
              borderRadius: 8,
              fontSize: 12,
              color: "#ece0cb",
            }}
            formatter={(_v, _n, item) => [
              `${item.payload.window} days`,
              item.payload.title,
            ]}
          />
          {/* transparent offset bar to position the visible window */}
          <Bar dataKey="start" stackId="t" fill="transparent" />
          <Bar dataKey="duration" stackId="t" fill="#b87333" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
