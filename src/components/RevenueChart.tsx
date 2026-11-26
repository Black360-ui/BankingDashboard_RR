import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 2800000 },
  { month: "Feb", revenue: 6200000 },
  { month: "Mar", revenue: 7800000 },
  { month: "Apr", revenue: 6500000 },
  { month: "May", revenue: 5700000 },
  { month: "Jun", revenue: 8500000 },
  { month: "Jul", revenue: 11440000 },
  { month: "Aug", revenue: 10200000 },
  { month: "Sep", revenue: 8200000 },
  { month: "Oct", revenue: 8400000 },
  { month: "Nov", revenue: 9800000 },
  { month: "Dec", revenue: 11800000 },
];

export default function RevenueChart() {
  return (
    <div className="min-w-0 rounded-lg bg-white p-5">
      <h3 className="font-semibold">Revenue Overview</h3>

      <p className="mt-1 text-sm text-slate-500">
        Track total revenue trends from rent and monthly utilities.
      </p>

      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <CartesianGrid
              stroke="#CBD5E1"
              strokeDasharray="3 3"
              vertical={false}
            />

            <Tooltip
              formatter={(value) => [
                `₦${Number(value).toLocaleString("en-NG")}`,
                "Revenue",
              ]}
            />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />

            <YAxis
              width={40}
              tick={{ fontSize: 12 }}
              tickFormatter={(value: number) => `${value / 1000000}M`}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#0053CD"
              fill="#0053CD"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
