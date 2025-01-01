import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row">
        <Sidebar />

        <div className="w-[100%]">
          <Navbar />
          <main className="flex-1 bg-gray-100 p-6 h-full">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
