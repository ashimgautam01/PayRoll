import CompanyDetails from "../components/CompanyDetails";
import Navbar from "../components/Navbar";
import UserDetails from "../components/UserDetails";

const mockUserData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  role: "Founder & CEO",
  location: "San Francisco, CA",
  bio: "Passionate entrepreneur with a focus on sustainable technology solutions.",
};

const mockCompanyData = [
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
];
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-teal-50 flex flex-col py-10">
        <main className="w-full flex flex-col items-center gap-y-6">
          {/* User Details Section */}
          <div className="w-full max-w-4xl text-center px-4 sm:px-6 lg:px-8">
            <UserDetails user={mockUserData} />
          </div>

          {/* Company Details Section */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <CompanyDetails company={mockCompanyData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;

