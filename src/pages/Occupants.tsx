import { useState } from "react";
import { Link } from "react-router"; 
import { occupants } from "../data/occupants";      



export default function Occupants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const query = searchTerm.trim().toLowerCase();

  const filteredOccupants = occupants.filter((occupant) => {
    const matchesSearch =
      occupant.name.toLowerCase().includes(query) ||
      occupant.shop.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All" || occupant.status.startsWith(statusFilter);

    return matchesSearch && matchesStatus;
  });

  const sortedOccupants = [...filteredOccupants].sort((a, b) => {
    if (sortOrder === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortOrder === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    return a.id - b.id;
  });

  const totalPages = Math.max(
  1,
  Math.ceil(sortedOccupants.length / pageSize)
);

const activePage = Math.min(currentPage, totalPages);
const startIndex = (activePage - 1) * pageSize;

const visibleOccupants = sortedOccupants.slice(
  startIndex,
  startIndex + pageSize
);
  return (
    <section>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Occupants</h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage all registered shop occupants.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          
  <select
    aria-label="Filter by billing status"
    value={statusFilter}
    onChange={(event) => {
      setStatusFilter(event.target.value);
      setCurrentPage(1);
    }}
    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm"
  >
    <option value="All">All statuses</option>
    <option value="Up to Date">Up to Date</option>
    <option value="Pending">Pending</option>
    <option value="Overdue">Overdue</option>
  </select>

          <select
            aria-label="Sort occupants"
            value={sortOrder}
            onChange={(event) => {
  setSortOrder(event.target.value);
  setCurrentPage(1);
}}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm"
          >
            <option value="default">Original order</option>
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
          </select>

          <input
            type="search"
            aria-label="Search occupants by name or shop number"
            placeholder="Name or shop number"
            value={searchTerm}
            onChange={(event) => {
  setSearchTerm(event.target.value);
  setCurrentPage(1);
}}
            className="min-w-0 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm sm:w-56"
          />

          <button
            type="button"
            className="rounded-lg bg-[#0053CD] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Add Occupant
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl bg-white">
        <table className="w-full min-w-[760px] text-left text-sm">
          <caption className="sr-only">
            Registered shop occupants and their billing status
          </caption>

          <thead className="bg-[#E5E9ED]">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Shop
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Billing Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Last Payment
              </th>
              <th scope="col" className="px-6 py-4 text-right font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {visibleOccupants.map((occupant) => (
              <tr
                key={occupant.id}
                className="border-b border-slate-200 last:border-b-0"
              >
                <td className="px-6 py-5">
  <Link
    to={`/occupants/${occupant.id}`}
    className="font-medium hover:text-blue-600 hover:underline"
  >
    {occupant.name}
  </Link>
</td>
                <td className="px-6 py-5">{occupant.shop}</td>

                <td
                  className={`px-6 py-5 ${
                    occupant.status === "Up to Date"
                      ? "text-[#2E865F]"
                      : occupant.status.startsWith("Pending")
                        ? "text-orange-500"
                        : "text-red-600"
                  }`}
                >
                  {occupant.status}
                </td>

                <td className="px-6 py-5">{occupant.lastPayment}</td>

                <td className="px-6 py-5 text-right">
                  <button
                    type="button"
                    aria-label={`Actions for ${occupant.name}`}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#AAB9C5] text-slate-600"
                  >
                    ⋯
                  </button>
                </td>
              </tr>
            ))}
            
            {filteredOccupants.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-8 text-center text-slate-500"
                >
                  No occupants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>


        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Showing</span>

            <select
              aria-label="Occupants per page"
              value={pageSize}
              onChange={(event) => {
  setPageSize(Number(event.target.value));
  setCurrentPage(1);
}}
              className="rounded-md border border-slate-200 bg-white px-2 py-1"
            >
              <option value="5">5</option>
              <option value="10">10</option>
            </select>

        <span>
  {filteredOccupants.length === 0
    ? "0 results"
    : `${startIndex + 1}–${startIndex + visibleOccupants.length} of ${filteredOccupants.length} results`}
</span>
          </div>

          <nav
  aria-label="Occupants pagination"
  className="flex flex-wrap items-center gap-2"
>
  <button
    type="button"
    aria-label="Previous page"
    disabled={activePage === 1}
    onClick={() => setCurrentPage(activePage - 1)}
    className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
  >
    ‹
  </button>

  {Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return (
      <button
        key={page}
        type="button"
        aria-label={`Page ${page}`}
        aria-current={activePage === page ? "page" : undefined}
        onClick={() => setCurrentPage(page)}
        className={`flex h-8 w-8 items-center justify-center rounded-md border text-xs ${
          activePage === page
            ? "border-blue-200 bg-blue-50 text-blue-600"
            : "border-slate-200 text-slate-600"
        }`}
      >
        {page}
      </button>
    );
  })}

  <button
    type="button"
    aria-label="Next page"
    disabled={activePage === totalPages}
    onClick={() => setCurrentPage(activePage + 1)}
    className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
  >
    ›
  </button>
</nav>
        </div>
      </div>
    </section>
  );
}
