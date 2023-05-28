import React from "react";
import  RecentNotes  from "./RecentNotes";
import { StateContext } from "../context/AppContext";
import { useContext } from "react";
const Dashboard = () => {
  const {notes} = useContext(StateContext);
  return (

    <div className="p-5 grid grid-cols-dashboard gap-y-5">
      {/* {notes.length>=0&&<RecentNotes/>} */}
      <RecentNotes/>
    
    </div>
  );
};

export default Dashboard;
