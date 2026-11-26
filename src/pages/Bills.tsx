
export default function Bills() {
  return (
    <section className="space-y-6">

      {/* Page Heading */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Bills Management
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Review and adjust rent and utility rates for each block.
        </p>
      </div>



      {/* Bills Summary */}
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-5 dark:bg-slate-900 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total Blocks */}
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-4 dark:border-slate-700 sm:border-b-0 sm:border-r sm:pb-0">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Blocks
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            06
          </h3>
        </div>

        {/* Utility Billing Cycle */}
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-4 dark:border-slate-700 sm:border-b-0 sm:border-r sm:pb-0">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Utility Billing Cycle (Monthly)
          </p>
          <p className="mt-2 text-sm text-slate-900 dark:text-white">
            Current cycle: October 2025
          </p>
        </div>

        {/* Rent Billing Cycle */}
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-4 dark:border-slate-700 sm:border-b-0 sm:border-r sm:pb-0">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Rent Billing Cycle (Yearly)
          </p>
          <p className="mt-2 text-sm text-slate-900 dark:text-white">
            Current cycle: 2025
          </p>
        </div>

        {/* Last Updated */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated
          </p>
          <p className="mt-2 text-sm text-slate-900 dark:text-white">
            September 10, 2025
          </p>
        </div>

      </div>


    </section>
  );
}
