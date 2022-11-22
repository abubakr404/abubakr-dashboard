import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="page">
      <Sidebar />
      <section className="page-container">
        <Navbar />
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;
