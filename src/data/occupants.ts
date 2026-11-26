type Occupant = {
  id: number;
  name: string;
  shop: string;
  status: string;
  lastPayment: string;
  phone?: string;
  email?: string;
  gender?: string;
  address?: string;
  dateAssigned?: string;
  nextRentDue?: string;
};



export const occupants: Occupant[] = [
{
  id: 1,
  name: "Adesola Jasmine",
  shop: "B-40",
  status: "Up to Date",
  lastPayment: "Oct 2, 2025 – ₦1,000 (Waste)",
  phone: "+234 802 000 1111",
  email: "desolajasmine2@gmail.com",
  gender: "Female",
  address: "15 Ojo Street, Lagos",
  dateAssigned: "Aug 15, 2024",
nextRentDue: "Not provided",
},
 
{
  id: 2,
  name: "Prince Igwe Prince",
  shop: "B-09",
  status: "Pending (2)",
  lastPayment: "Sep 25, 2025 – ₦1,000 (Waste)",
  phone: "+234 800 000 0002",
  email: "prince.igwe@example.com",
  gender: "Male",
  address: "12 Marina Road, Lagos",
  dateAssigned: "Mar 10, 2023",
  nextRentDue: "Mar 10, 2026",
},


{
  id: 3,
  name: "Catherine Ike Faith",
  shop: "D-10",
  status: "Overdue (3)",
  lastPayment: "Aug 5, 2025 – ₦1,000 (Waste)",
  phone: "+234 803 000 0003",
  email: "catherine.ike@example.com",
  gender: "Female",
  address: "24 Allen Avenue, Ikeja, Lagos",
  dateAssigned: "Jun 15, 2022",
  nextRentDue: "Jun 15, 2026",
},

 
  {
    id: 4,
    name: "Bolaji Adebayo",
    shop: "A-14",
    status: "Overdue (1)",
    lastPayment: "Aug 5, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0004",
    email: "bolaji.adebayo@example.com",
    gender: "Male",
    address: "18 Herbert Macaulay Way, Yaba, Lagos",
    dateAssigned: "Sep 1, 2023",
    nextRentDue: "Sep 1, 2027",
  },
  {
    id: 5,
    name: "Nwobu Gloria",
    shop: "E-05",
    status: "Up to Date",
    lastPayment: "Oct 2, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0005",
    email: "nwobu.gloria@example.com",
    gender: "Female",
    address: "8 Adeniran Ogunsanya Street, Surulere, Lagos",
    dateAssigned: "Feb 12, 2024",
    nextRentDue: "Feb 12, 2027",
  },
  {
    id: 6,
    name: "Bright Jacobs Okesola",
    shop: "E-25",
    status: "Up to Date",
    lastPayment: "Oct 2, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0006",
    email: "bright.okesola@example.com",
    gender: "Male",
    address: "21 Ikorodu Road, Maryland, Lagos",
    dateAssigned: "May 20, 2023",
    nextRentDue: "May 20, 2027",
  },
  {
    id: 7,
    name: "Kayode Fasola Caleb",
    shop: "E-10",
    status: "Up to Date",
    lastPayment: "Oct 2, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0007",
    email: "kayode.caleb@example.com",
    gender: "Male",
    address: "14 Opebi Road, Ikeja, Lagos",
    dateAssigned: "Jan 8, 2024",
    nextRentDue: "Jan 8, 2027",
  },
  {
    id: 8,
    name: "Joy Emmanuel",
    shop: "F-20",
    status: "Up to Date",
    lastPayment: "Oct 2, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0008",
    email: "joy.emmanuel@example.com",
    gender: "Female",
    address: "5 Bode Thomas Street, Surulere, Lagos",
    dateAssigned: "Jul 15, 2023",
    nextRentDue: "Jul 15, 2027",
  },
  {
    id: 9,
    name: "David Thompson",
    shop: "C-37",
    status: "Up to Date",
    lastPayment: "Oct 2, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0009",
    email: "david.thompson@example.com",
    gender: "Male",
    address: "32 Admiralty Way, Lekki, Lagos",
    dateAssigned: "Nov 5, 2023",
    nextRentDue: "Nov 5, 2027",
  },
  {
    id: 10,
    name: "Sylvia Agada Uka",
    shop: "C-38",
    status: "Pending (1)",
    lastPayment: "Sep 25, 2025 – ₦1,000 (Waste)",
    phone: "+234 800 000 0010",
    email: "sylvia.uka@example.com",
    gender: "Female",
    address: "11 Akowonjo Road, Egbeda, Lagos",
    dateAssigned: "Apr 18, 2024",
    nextRentDue: "Apr 18, 2027",
  },
]