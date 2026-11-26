import { Pie, PieChart, ResponsiveContainer } from "recharts";

const utilityData = [
  { name: "Light", value: 735000, fill: "#0053CD" },
  { name: "Security", value: 525000, fill: "#F2A33A" },
  { name: "Cleaning", value: 315000, fill: "#650080" },
  { name: "Waste", value: 525000, fill: "#2E865F" },
];

export default function UtilityChart() {
    const totalUtilityPayments = utilityData.reduce(
  (total, utility) => total + utility.value,
  0
)
  return (
    <div className="min-w-0 rounded-lg bg-white p-5">
      <h3 className="font-semibold">Utility Payment Breakdown</h3>

      <p className="mt-1 text-sm text-slate-500">
        Distribution of utility payments for this month
      </p>

      <div className="relative mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={utilityData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="85%"
              paddingAngle={3}
              stroke="none"
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-xl font-semibold"> ₦{totalUtilityPayments.toLocaleString('en-NG')}</p>
          <p className="mt-1 text-xs text-slate-500">Total utility payments</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {utilityData.map((utility) => (
          <div key={utility.name} className="flex items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: utility.fill }}
            />
            <span className="text-sm text-slate-600">{utility.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
