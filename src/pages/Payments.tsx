import { useState } from "react";

const paymentRecords = [
  {
    id: 1,
    date: "November 16, 2026",
    occupant: "Adesola Jasmine",
    shop: "B-40",
    billType: "Rent",
    amount: "₦250,000",
    reference: "TXN-52341",
  },
  {
    id: 2,
    date: "November 14, 2026",
    occupant: "Prince Igwe Prince",
    shop: "B-09",
    billType: "Rent",
    amount: "₦250,000",
    reference: "TXN-52341",
  },
  {
    id: 3,
    date: "November 12, 2026",
    occupant: "Catherine Ike Faith",
    shop: "D-10",
    billType: "Cleaning",
    amount: "₦12,000",
    reference: "TXN-52341",
  },
  {
    id: 4,
    date: "	November 9, 2026",
    occupant: "Bolaji Adebayo",
    shop: "A-14",
    billType: "Waste",
    amount: "₦4,500",
    reference: "TXN-52341",
  },
  {
    id: 5,
    date: "	November 5, 2026",
    occupant: "Nwobu Gloria",
    shop: "E-05",
    billType: "Security",
    amount: "₦6,000",
    reference: "TXN-52341",
  },
  {
    id: 6,
    date: "	October 25, 2026",
    occupant: "Bright Jacobs Okesola",
    shop: "C-22",
    billType: "Rent",
    amount: "₦200,000",
    reference: "TXN-52341",
  },
  {
    id: 7,
    date: "	October 15, 2026",
    occupant: "Kayode Fasola Caleb",
    shop: "E-10",
    billType: "Cleaning",
    amount: "₦12,000",
    reference: "TXN-52341",
  },
  {
    id: 8,
    date: "October 5, 2026",
    occupant: "Joy Emmanuel",
    shop: "F-20",
    billType: "Cleaning",
    amount: "₦12,000",
    reference: "TXN-52341",
  },
];

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [billTypeFilter, setBillTypeFilter] = useState("All");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");
  const [showPeriodMenu, setShowPeriodMenu] = useState(false);
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<
    (typeof paymentRecords)[number] | null
  >(null);

  const filteredPayments = paymentRecords.filter((payment) => {
    const searchValue = searchTerm.toLowerCase().trim();

    // Search filter
    const matchesSearch =
      payment.occupant.toLowerCase().includes(searchValue) ||
      payment.shop.toLowerCase().includes(searchValue) ||
      payment.reference.toLowerCase().includes(searchValue) ||
      payment.billType.toLowerCase().includes(searchValue) ||
      payment.amount.toLowerCase().includes(searchValue) ||
      payment.date.toLowerCase().includes(searchValue);

    // Bill type filter
    const matchesBillType =
      billTypeFilter === "All" || payment.billType === billTypeFilter;

    // Convert payment date into a JavaScript Date
    const paymentDate = new Date(payment.date.trim());
    paymentDate.setHours(0, 0, 0, 0);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    // Calculate the beginning of this week (Monday)
    const startOfWeek = new Date(today);
    const day = startOfWeek.getDay();

    startOfWeek.setDate(startOfWeek.getDate() - (day === 0 ? 6 : day - 1));

    // Calculate the beginning of this month
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Calculate the beginning of last month
    const startOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1,
    );

    // Calculate the beginning of next month
    const startOfNextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      1,
    );

    // Date period filter
    let matchesPeriod = true;

    switch (selectedPeriod) {
      case "Today":
        matchesPeriod = paymentDate.getTime() === today.getTime();
        break;

      case "This Week":
        matchesPeriod = paymentDate >= startOfWeek && paymentDate <= today;
        break;

      case "This Month":
        matchesPeriod = paymentDate >= startOfMonth && paymentDate <= today;
        break;

      case "Last Month":
        matchesPeriod =
          paymentDate >= startOfLastMonth && paymentDate < startOfMonth;
        break;

      case "This Year":
        matchesPeriod =
          paymentDate.getFullYear() === today.getFullYear() &&
          paymentDate <= today;
        break;

      case "Custom Date Range": {
        if (!customStartDate || !customEndDate) {
          matchesPeriod = false;
        } else {
          const startDate = new Date(`${customStartDate}T00:00:00`);
          const endDate = new Date(`${customEndDate}T23:59:59.999`);

          matchesPeriod = paymentDate >= startDate && paymentDate <= endDate;
        }

        break;
      }

      default:
        matchesPeriod = true;
    }

    return matchesSearch && matchesBillType && matchesPeriod;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPayments.length / pageSize));

  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const visiblePages =
    totalPages <= 5
      ? Array.from({ length: totalPages }, (_, index) => index + 1)
      : currentPage <= 3
        ? [1, 2, 3, 4, "...", totalPages - 1, totalPages]
        : currentPage >= totalPages - 2
          ? [
              1,
              2,
              "...",
              totalPages - 3,
              totalPages - 2,
              totalPages - 1,
              totalPages,
            ]
          : [
              1,
              "...",
              currentPage - 1,
              currentPage,
              currentPage + 1,
              "...",
              totalPages,
            ];
  return (
    <section className="space-y-6">
      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Payments</h2>

          <p className="mt-1 text-sm text-slate-500">
            Track all successful bills and rent payments across the facility.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Date Period Selector */}
        <div className="relative">
          <p className="text-sm text-slate-500">
            Showing data for:{" "}
            <button
              type="button"
              onClick={() => setShowPeriodMenu((open) => !open)}
              aria-expanded={showPeriodMenu}
              aria-haspopup="true"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              {selectedPeriod} ▾
            </button>
          </p>

          {showPeriodMenu && (
            <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
              <p className="px-3 py-2 text-xs font-medium text-slate-400">
                SELECT DATE PERIOD
              </p>

              {[
                "Today",
                "This Week",
                "This Month",
                "Last Month",
                "This Year",
                "Custom Date Range",
              ].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => {
                    setSelectedPeriod(period);
                    setShowPeriodMenu(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                    selectedPeriod === period
                      ? "bg-blue-50 font-medium text-blue-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          {/* Filter Button */}
          {/* Filter Button and Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowFilterMenu((open) => !open)}
              aria-expanded={showFilterMenu}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              <img
                src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1793893998/filter_sohy6n.png"
                alt=""
                className="h-4 w-4 object-contain"
              />
              Filter
            </button>

            {showFilterMenu && (
              <div className="absolute left-0 right-auto top-full z-50 mt-2 w-48 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-200 bg-white p-2 shadow-lg sm:left-auto sm:right-0">
                <p className="px-3 py-2 text-xs font-medium text-slate-400">
                  FILTER BY BILL TYPE
                </p>

                {["All", "Rent", "Cleaning", "Waste", "Security"].map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setBillTypeFilter(type);
                        setCurrentPage(1);
                        setShowFilterMenu(false);
                      }}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                        billTypeFilter === type
                          ? "bg-blue-50 font-medium text-blue-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {type === "All" ? "All Payment Types" : type}
                    </button>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="relative min-w-0 flex-1 sm:w-60 sm:flex-none">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1793972033/search_grnkix.png"
              alt=""
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 object-contain"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Occupant name, shop number, or ref ID..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Custom Date Range Picker */}
      {selectedPeriod === "Custom Date Range" && (
        <div className="flex flex-wrap items-end gap-4 rounded-lg border border-slate-200 bg-white p-4">
          {/* Start Date */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="start-date"
              className="text-sm font-medium text-slate-600"
            >
              Start Date
            </label>

            <input
              id="start-date"
              type="date"
              value={customStartDate}
              onChange={(event) => {
                setCustomStartDate(event.target.value);

                if (customEndDate && event.target.value > customEndDate) {
                  setCustomEndDate("");
                }

                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="end-date"
              className="text-sm font-medium text-slate-600"
            >
              End Date
            </label>

            <input
              id="end-date"
              type="date"
              value={customEndDate}
              min={customStartDate || undefined}
              disabled={!customStartDate}
              onChange={(event) => {
                setCustomEndDate(event.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-slate-100"
            />
          </div>

          <p className="pb-2 text-xs text-slate-500">
            Select a start and end date to filter payments.
          </p>
        </div>
      )}

      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {/* Total Payment Amount */}
        <div className="flex items-start justify-between rounded-lg bg-white p-4">
          <div>
            <p className="text-sm text-slate-500">Total Payment Amount</p>

            <h3 className="mt-2 text-xl font-semibold">₦8,400,000</h3>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1793893956/money-receive-02_yqpxah.png"
              alt="Payment received"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        {/* Total Payment Count */}
        <div className="flex items-start justify-between rounded-lg bg-white p-4">
          <div>
            <p className="text-sm text-slate-500">Total Payment Count</p>

            <h3 className="mt-2 text-xl font-semibold">142</h3>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1793893926/layers-01_modxbd.png"
              alt="Payment count"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        {/* Rent vs Utilities */}
        <div className="flex items-start justify-between gap-4 rounded-lg bg-white p-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm text-slate-500">Rent vs Utilities</p>

            <div className="mt-3 flex items-center gap-3 whitespace-nowrap text-sm">
              <span>
                Rent <strong className="ml-1">70%</strong>
              </span>

              <span className="text-slate-400">|</span>

              <span>
                <span className="text-slate-500">Utilities</span>
                <strong className="ml-1">30%</strong>
              </span>
            </div>

            <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full">
              <div className="w-[70%] bg-blue-600"></div>
              <div className="w-[30%] bg-slate-300"></div>
            </div>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1793893987/pie-chart-03_krh6bn.png"
              alt="Rent and utilities breakdown"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Payments Transaction Table */}
      <div className="overflow-hidden rounded-lg bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">
            {/* Table Header */}
            <thead>
              <tr className="bg-slate-200/70 text-sm text-slate-700">
                <th className="px-5 py-4 font-medium">Date</th>

                <th className="px-5 py-4 font-medium">Occupant</th>

                <th className="px-5 py-4 font-medium">Shop</th>

                <th className="px-5 py-4 font-medium">Bill Type</th>

                <th className="px-5 py-4 font-medium">Amount</th>

                <th className="px-5 py-4 font-medium">Reference ID</th>

                <th className="px-5 py-4 text-center font-medium">Receipt</th>
              </tr>
            </thead>

            {/* Table Body */}

            {/* Table Body */}
            <tbody>
              {paginatedPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-slate-200 text-sm text-slate-700 last:border-b-0"
                >
                  <td className="whitespace-nowrap px-5 py-5">
                    {payment.date}
                  </td>

                  <td className="whitespace-nowrap px-5 py-5">
                    {payment.occupant}
                  </td>

                  <td className="px-5 py-5">{payment.shop}</td>

                  <td className="px-5 py-5">{payment.billType}</td>

                  <td className="whitespace-nowrap px-5 py-5">
                    {payment.amount}
                  </td>

                  <td className="whitespace-nowrap px-5 py-5">
                    {payment.reference}
                  </td>

                  <td className="px-5 py-5 text-center">
                    <button
                      type="button"
                      onClick={() => setSelectedPayment(payment)}
                      className="text-slate-700 transition hover:text-blue-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {/* Empty Search Results */}
              {filteredPayments.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-8 text-center text-sm text-slate-500"
                  >
                    No payments match your search or selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}

        {/* Table Pagination Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5">
          {/* Page Size and Record Count */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Showing</span>

            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value));
                setCurrentPage(1);
              }}
              className="rounded-md border border-slate-200 bg-white px-2 py-1.5 outline-none focus:border-blue-500"
              aria-label="Payments per page"
            >
              <option value={4}>04</option>
              <option value={8}>08</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>

            <span>out of {filteredPayments.length}</span>
          </div>

          {/* Page Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 text-sm">
            {/* Previous Page */}
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              ‹
            </button>

            {/* Page Numbers */}
            {visiblePages.map((page, index) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="flex h-8 w-8 items-center justify-center text-slate-500"
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-8 w-8 items-center justify-center rounded-md border transition ${
                    currentPage === page
                      ? "border-blue-200 bg-blue-50 font-medium text-blue-600"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            {/* Next Page */}
            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Payment Receipt Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="receipt-title"
            className="receipt-print-area w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
          >
            {/* Modal Header */}
            
{/* Modal Header */}
<div className="border-b border-slate-200 pb-4">
  <h3
    id="receipt-title"
    className="text-lg font-semibold text-slate-800"
  >
    Payment Receipt
  </h3>

  <p className="mt-1 text-xs text-slate-500">
    NestEdge Payment Confirmation
  </p>
</div>


            {/* Receipt Status */}
            <div className="py-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                ✓
              </div>

              <p className="mt-3 text-sm font-medium text-green-600">
                Payment Successful
              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-800">
                {selectedPayment.amount}
              </h4>
            </div>

            {/* Receipt Details */}
            <div className="space-y-4 border-t border-dashed border-slate-300 pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Occupant</span>
                <span className="text-right font-medium text-slate-800">
                  {selectedPayment.occupant}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Shop Number</span>
                <span className="font-medium text-slate-800">
                  {selectedPayment.shop}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Payment Date</span>
                <span className="font-medium text-slate-800">
                  {selectedPayment.date.trim()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Bill Type</span>
                <span className="font-medium text-slate-800">
                  {selectedPayment.billType}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Reference ID</span>
                <span className="text-right font-medium text-slate-800">
                  {selectedPayment.reference}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-center text-xs text-slate-400">
                Thank you for your payment.
              </p>

              <div className="no-print mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Print Receipt
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPayment(null)}
                  className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Close Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
