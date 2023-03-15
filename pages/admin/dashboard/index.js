import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { Providers } from "@/services/provider";
import React from "react";


const Dashboard = () => {
  return <></>;
};

export default Dashboard;
Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <DashboardSidebar/>

        {page}
      </Providers>
    </>
  );
};
