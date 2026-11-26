
import { Link, useParams } from "react-router";
import { occupants } from "../data/occupants";

const billingItems = [
  {
    type: "Rent",
    amount: "₦250,000",
    dueDate: "Aug 15, 2025",
    status: "Paid",
    paymentDate: "Aug 15, 2025",
    receipt: "View",
  },
  {
    type: "Light",
    amount: "₦5,000",
    dueDate: "Aug 15, 2025",
    status: "Pending",
    paymentDate: "---",
    receipt: "---",
  },
  {
    type: "Cleaning",
    amount: "₦3,000",
    dueDate: "Aug 15, 2025",
    status: "Overdue",
    paymentDate: "---",
    receipt: "---",
  },
  {
    type: "Security",
    amount: "₦2,000",
    dueDate: "Aug 15, 2025",
    status: "Paid",
    paymentDate: "Aug 15, 2025",
    receipt: "View",
  },
  {
    type: "Waste",
    amount: "₦1,000",
    dueDate: "Aug 15, 2025",
    status: "Paid",
    paymentDate: "Aug 15, 2025",
    receipt: "View",
  },
];

const paymentHistory = [
  {
    date: "Aug 15, 2025",
    type: "Rent",
    amount: "₦250,000",
    reference: "TXN-52341",
  },
  {
    date: "Aug 15, 2025",
    type: "Light",
    amount: "₦5,000",
    reference: "TXN-52342",
  },
  {
    date: "Aug 15, 2025",
    type: "Cleaning",
    amount: "₦3,000",
    reference: "TXN-52343",
  },
  {
    date: "Aug 15, 2025",
    type: "Security",
    amount: "₦2,000",
    reference: "TXN-52344",
  },
  {
    date: "Aug 15, 2025",
    type: "Waste",
    amount: "₦1,000",
    reference: "TXN-52345",
  },
];

export default function OccupantProfile() {
  const { occupantId } = useParams();

  const occupant = occupants.find(
    (person) => person.id === Number(occupantId)
  );

  if (!occupant) {
    return (
      <section>
        <p>Occupant not found.</p>
        <Link
          to="/occupants"
          className="text-blue-600 hover:underline"
        >
          Back to Occupants
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <Link
        to="/occupants"
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to Occupants
      </Link>

      {/* Profile Summary */}
      <div className="grid gap-4 rounded-lg bg-white p-5 sm:grid-cols-3 sm:items-center">
        <div>
          <p className="text-sm text-slate-500">Occupant</p>
          <h2 className="mt-1 font-semibold">
            {occupant.name}
          </h2>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Billing Status
          </p>
          <p className="mt-1 text-sm font-medium">
            {occupant.status}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Last Payment
          </p>
          <p className="mt-1 text-sm">
            {occupant.lastPayment}
          </p>
        </div>
      </div>

      {/* Personal and Occupancy Information */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Personal Information */}
        <div className="min-w-0 overflow-hidden rounded-xl bg-white">
          <div className="border-b border-slate-100 px-8 py-6">
            <h3 className="font-semibold">
              Personal Information
            </h3>
          </div>

          <dl className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">
                Phone Number
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.phone ?? "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Email Address
              </dt>
              <dd className="mt-2 break-words text-sm font-medium">
                {occupant.email ?? "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Gender
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.gender ?? "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Address
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.address ?? "Not provided"}
              </dd>
            </div>
          </dl>
        </div>

        {/* Occupancy Information */}
        <div className="min-w-0 overflow-hidden rounded-xl bg-white">
          <div className="border-b border-slate-100 px-8 py-6">
            <h3 className="font-semibold">
              Occupancy Information
            </h3>
          </div>

          <dl className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">
                Block
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.shop.split("-")[0]}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Shop Number
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.shop.split("-")[1]}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Date Assigned
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.dateAssigned ?? "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Next Rent Due
              </dt>
              <dd className="mt-2 text-sm font-medium">
                {occupant.nextRentDue ?? "Not provided"}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Billing */}
      <div className="overflow-hidden rounded-xl bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-6">
          <h3 className="font-semibold">Billing</h3>
          <p className="text-sm text-slate-500">
            Billing overview — October 2025
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-6 py-4 font-medium">Bill Type</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Due Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Payment Date</th>
                <th className="px-6 py-4 font-medium">Receipt</th>
              </tr>
            </thead>

            <tbody>
              {billingItems.map((bill) => (
                <tr
                  key={bill.type}
                  className="border-b border-slate-100"
                >
                  <td className="px-6 py-5">{bill.type}</td>
                  <td className="px-6 py-5">{bill.amount}</td>
                  <td className="px-6 py-5">{bill.dueDate}</td>

                  <td className="px-6 py-5">
                    <span
                      className={
                        bill.status === "Paid"
                          ? "text-green-600"
                          : bill.status === "Pending"
                          ? "text-orange-500"
                          : "text-red-600"
                      }
                    >
                      {bill.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    {bill.paymentDate}
                  </td>

                  <td className="px-6 py-5">
                    {bill.receipt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div className="overflow-hidden rounded-xl bg-white">
        <div className="border-b border-slate-100 px-6 py-6">
          <h3 className="font-semibold">Payment History</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Bill Type</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Reference ID</th>
                <th className="px-6 py-4 font-medium">Receipt</th>
              </tr>
            </thead>

            <tbody>
              {paymentHistory.map((payment) => (
                <tr
                  key={payment.reference}
                  className="border-b border-slate-100"
                >
                  <td className="px-6 py-5">
                    {payment.date}
                  </td>
                  <td className="px-6 py-5">
                    {payment.type}
                  </td>
                  <td className="px-6 py-5">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-5">
                    {payment.reference}
                  </td>
                  <td className="px-6 py-5">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
