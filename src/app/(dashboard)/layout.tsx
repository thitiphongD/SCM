import Link from "next/link";
import "../css/dashboardLayout.css";
import Logo from "../components/icon/Logo";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="dash-left">
        <Link href="/" className="logo">
          <Logo />
          <span className="hidden lg:block font-bold">School</span>
        </Link>
        <Sidebar />
      </div>
      <div className="dash-right">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
