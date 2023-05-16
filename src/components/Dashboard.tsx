import React from "react";
import  TodaysTasks  from "./TodaysTasks";

const Dashboard = () => {
  return (

    <div className="p-5 grid grid-cols-dashboard gap-y-5">
    <TodaysTasks/>
    </div>
  );
};

export default Dashboard;
