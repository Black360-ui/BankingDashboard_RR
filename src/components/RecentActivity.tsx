
const activities = [
  {
    id: 1,
    message: 'Rent payment received from Chuka Okafor (Shop B22)',
    time: '5 mins ago',
  },
  {
    id: 2,
    message: 'Waste bill payment received for Shop C-04',
    time: '30 mins ago',
  },
  {
    id: 3,
    message: 'New occupant registered for Shop A-10',
    time: '2 hrs ago',
  },
  {
    id: 4,
    message: 'Automated reminders sent to occupants with pending payments',
    time: '4 hrs ago',
  },
  {
    id: 5,
    message: 'Electricity billing rate updated for Block B',
    time: 'Yesterday',
  },
]



export default function RecentActivity() {
  return (
    <div className="min-w-0 rounded-lg bg-white p-5">
      <h3 className="font-semibold">Recent Activity</h3>
<ul className="mt-4">
  {activities.map((activity) => (
    <li
      key={activity.id}
      className="flex flex-col gap-2 border-b border-slate-100 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
   <div className="flex min-w-0 items-center gap-3">
  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#AAB9C5] text-slate-500">
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  </span>

  <p className="text-sm text-slate-700">
    {activity.message}
  </p>
</div>

      <span className="shrink-0 text-xs text-slate-500">
        {activity.time}
      </span>
    </li>
  ))}
</ul>
    </div>
  )
}