
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";

const navigation = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Occupants", to: "/occupants" },
  { label: "Payments", to: "/payments" },
  { label: "Shops", to: "/shops" },
  { label: "Bills Management", to: "/bills" },
  { label: "Settings", to: "/settings" },
];

export default function DashboardLayout() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("nestedge-theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("nestedge-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100 md:flex">

      {/* Sidebar */}
      <aside className="border-b border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 md:min-h-screen md:w-60 md:shrink-0 md:border-r md:border-b-0">

        <p className="mb-8 px-3 text-2xl font-bold text-blue-600">
          NestEdge
        </p>

        <nav aria-label="Main navigation" className="space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-blue-50 font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Dashboard Area */}
      <div className="min-w-0 flex-1">

        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900 md:px-10">

          <h1 className="font-semibold">
            Welcome back, Ayodeji
          </h1>

          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setIsDark((current) => !current)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDark}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              {isDark ? "☀ Light" : "☾ Dark"}
            </button>

            {/* Notification Bell */}
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1793972014/solar_bell-linear_jqmh87.png"
                alt=""
                className="h-5 w-5 object-contain"
              />
            </button>

            {/* Admin Profile */}
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-2 py-1.5 dark:border-slate-700">

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold dark:bg-slate-700">
                AA
              </span>

              <div>
                <p className="text-sm font-medium">
                  Ayodeji Aderemi
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Admin
                </p>
              </div>

            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-73px)] bg-slate-100 p-6 transition-colors dark:bg-slate-950 md:px-10 md:py-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
