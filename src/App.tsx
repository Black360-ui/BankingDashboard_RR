import { Navigate, Route, Routes } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import RevenueChart from "./components/RevenueChart";
import UtilityChart from "./components/UtilityChart";
import RecentActivity from "./components/RecentActivity";
import QuickInsights from './components/QuickInsights'
import Occupants from './pages/Occupants'
import OccupantProfile from "./pages/OccupantProfile";
import Payments from "./pages/Payments";
import Shops from "./pages/Shops";
import Bills from "./pages/Bills";

function Dashboard() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">My NestEdge Dashboard</h2>

      <p className="mt-2 text-slate-500">
        Your property overview will appear here.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Occupants */}
        <div className="rounded-lg bg-white px-4 py-[18px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Total Occupants</p>
              <p className="mt-2 text-xl font-semibold">485</p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#AAB9C5]">
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1791312630/user-group_rlaomn.png"
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            <span className="text-[#2E865F]">+12</span> new this month
          </p>
        </div>

        {/* Active Shops */}
        <div className="rounded-lg bg-white px-4 py-[18px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Active Shops</p>
              <p className="mt-2 text-xl font-semibold">485 / 600</p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#AAB9C5]">
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1791380962/lets-icons_shop-light_gwfoxm.png"
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            <span className="text-[#0053CD]">115</span> vacant
          </p>
        </div>

        {/* Pending Payments */}
        <div className="rounded-lg bg-white px-4 py-[18px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Pending Payments</p>
              <p className="mt-2 text-xl font-semibold">25</p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#AAB9C5]">
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1791312493/money-add-02_ctpewv.png"
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Due within <span className="text-orange-500">7 days</span>
          </p>
        </div>

        {/* Revenue this Month */}
        <div className="rounded-lg bg-white px-4 py-[18px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Revenue this Month</p>
              <p className="mt-2 text-xl font-semibold">₦8,400,000</p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#AAB9C5]">
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1791312493/money-add-02_ctpewv.png"
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            <span className="text-[#2E865F]">+₦1.2M</span> vs last month
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <RevenueChart />
        </div>

        <UtilityChart />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <RecentActivity />
        </div>

        <QuickInsights/>
      </div>
    </section>
  );
}

type PlaceholderPageProps = {
  title: string;
};

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-slate-500">This page is coming soon.</p>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/occupants"
          element={<Occupants/>}
        />

        <Route
  path="/occupants/:occupantId"
  element={<OccupantProfile />}
/>
        <Route path="/payments" element={<Payments />} />
        <Route path="/shops" element={<Shops />} />
  
       <Route path="/bills" element={<Bills />} />

        
        <Route
          path="/settings"
          element={<PlaceholderPage title="Settings" />}
        />
      </Route>

      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
}
