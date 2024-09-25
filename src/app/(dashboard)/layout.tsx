import Link from "next/link";
import "../css/dashboardLayout.css";
import Logo from "../components/icon/Logo";
import Sidebar from "../components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="dash-left">
        <Link href="/" className="logo">
          <Logo />
          <span className="hidden lg:block">School</span>
        </Link>
        <Sidebar />
      </div>
      <div className="dash-right"> {children}</div>
    </div>
  );
}
