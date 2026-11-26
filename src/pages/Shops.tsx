
import { useState } from "react";
import { occupants } from "../data/occupants";

// Controls how page numbers are displayed
function getPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages] as const;
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ] as const;
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ] as const;
}

export default function Shops() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  // Search shops by occupant name or shop number
  const filteredOccupants = occupants.filter((occupant) => {
    const search = searchTerm.toLowerCase();

    return (
      occupant.name.toLowerCase().includes(search) ||
      occupant.shop.toLowerCase().includes(search)
    );
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredOccupants.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentOccupants = filteredOccupants.slice(
    startIndex,
    endIndex
  );

  const pageNumbers = getPageNumbers(
    currentPage,
    Math.max(totalPages, 1)
  );

  // Reset to page one when search changes
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Change number of records displayed per page
  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  return (
    <section className="space-y-6">

      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Shops
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage all shop units and monitor occupancy status.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <span>⚲</span>
            Filter
          </button>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Shop number or occupant name..."
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 sm:w-72 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Shop Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {/* Total Shops */}
        <div className="flex items-start justify-between rounded-lg bg-white p-4 dark:bg-slate-900">
          <div>
            <p className="text-sm text-slate-500">Total Shops</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              600
            </h3>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1795179218/Frame_2095586964_gnq5wz.png"
              alt="Total shops"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        {/* Occupied Shops */}
        <div className="flex items-start justify-between rounded-lg bg-white p-4 dark:bg-slate-900">
          <div>
            <p className="text-sm text-slate-500">Occupied Shops</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              485
            </h3>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1795179199/lets-icons_shop-light_qslmxw.png"
              alt="Occupied shops"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        {/* Vacant Shops */}
        <div className="flex items-start justify-between rounded-lg bg-white p-4 dark:bg-slate-900">
          <div>
            <p className="text-sm text-slate-500">Vacant Shops</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              115
            </h3>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700">
            <img
              src="https://res.cloudinary.com/dxfc8zalv/image/upload/v1795179168/store-add-01_yw7yy0.png"
              alt="Vacant shops"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

      </div>

      {/* Shops Table */}
      <div className="overflow-hidden rounded-lg bg-white dark:bg-slate-800">

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">

            <thead className="bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
              <tr>
                <th className="px-5 py-4 font-medium">Shop</th>
                <th className="px-5 py-4 font-medium">Occupant Name</th>
                <th className="px-5 py-4 font-medium">Billing Status</th>
                <th className="px-5 py-4 font-medium">Occupancy Status</th>
                <th className="px-5 py-4 font-medium">Next Rent Due</th>
                <th className="px-5 py-4 text-center font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">

              {currentOccupants.length > 0 ? (
                currentOccupants.map((occupant) => (
                  <tr
                    key={occupant.id}
                    className="text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700/50"
                  >
                    <td className="px-5 py-4 font-medium">
                      {occupant.shop}
                    </td>

                    <td className="px-5 py-4">
                      {occupant.name}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`${
                          occupant.status === "Up to Date"
                            ? "text-green-600"
                            : occupant.status.startsWith("Pending")
                            ? "text-orange-500"
                            : "text-red-500"
                        }`}
                      >
                        {occupant.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      Occupied
                    </td>

                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">
                      {occupant.nextRentDue || "—"}
                    </td>

                    <td className="px-5 py-4 text-center">
                      <button
                        type="button"
                        className="rounded-md border border-slate-200 px-2 py-1 text-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                      >
                        ...
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-slate-500 dark:text-slate-400"
                  >
                    No shops found matching your search.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-5 py-4 dark:border-slate-700">

          {/* Page Size Selector */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Showing</span>

            <select
              value={pageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              className="rounded-md border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            >
              <option value={8}>08</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>

            <span>
              out of {filteredOccupants.length}
            </span>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-1">

            {/* Previous */}
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1 || totalPages === 0}
              aria-label="Previous page"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              ‹
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page, index) => (
              <button
                key={`${page}-${index}`}
                type="button"
                disabled={page === "..."}
                onClick={() => {
                  if (typeof page === "number") {
                    setCurrentPage(page);
                  }
                }}
                className={`flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm transition ${
                  currentPage === page
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                } ${page === "..." ? "cursor-default border-transparent" : ""}`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              aria-label="Next page"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              ›
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}
