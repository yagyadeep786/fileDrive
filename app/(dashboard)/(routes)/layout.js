import React from "react";
import { UserButton } from "@clerk/nextjs";
import Sidebar from "./_components/Sidebar";
import Topheader from "./_components/Topheader";
const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[200px_1fr]">
      <div className="h-screen rounded-lg">
        <Sidebar />
      </div>
      <div className="h-screen rounded-lg">
        <Topheader />
        <div className="h-[90vh] flex items-center justify-center bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
