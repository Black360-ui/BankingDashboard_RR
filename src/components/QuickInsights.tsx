import { Link } from "react-router";

export default function QuickInsights() {
  return (
    <div className="min-w-0 rounded-lg bg-white p-5">
      <h3 className="font-semibold">Quick Insights</h3>

      <div className="mt-4 space-y-4">
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <div className="bg-slate-50 p-3">
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1791816533/Frame_2095586934_zuoth8.png"
                alt=""
                className="h-6 w-6 shrink-0 object-contain"
              />

              <h4 className="text-sm font-medium">Overdue Bills</h4>
            </div>

            <p className="mt-2 text-sm">8 accounts overdue this month</p>

            <p className="mt-1 text-xs text-slate-500">
              Highest overdue – Shop C-10 (₦118,000, Electricity)
            </p>
          </div>

          <Link
            to="/bills"
            className="block bg-blue-50 py-2 text-center text-xs font-medium text-blue-600 hover:bg-blue-100"
          >
            View All
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200">
          <div className="bg-slate-50 p-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#AAB9C5]">
                <img
                  src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1791380962/lets-icons_shop-light_gwfoxm.png"
                  alt=""
                  className="h-4 w-4 object-contain"
                />
              </span>

              <h4 className="text-sm font-medium">Vacant Shops</h4>
            </div>

            <p className="mt-2 text-sm">115 shops currently unoccupied</p>

            <p className="mt-1 text-xs text-slate-500">
              Block F has the most vacancies
            </p>
          </div>

          <Link
            to="/shops"
            className="block bg-blue-50 py-2 text-center text-xs font-medium text-blue-600 hover:bg-blue-100"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
