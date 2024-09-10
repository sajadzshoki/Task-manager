import React from "react";
import RecentNotes from "./RecentNotes";
import { StateContext } from "../../context/NotesContext";
import { useContext } from "react";
import BudgetSmall from "./BudgetSmall";
const Dashboard = () => {
  const { notes } = useContext(StateContext);
  return (
    <div>
      {/* temprory github link */}
      <a
        className="text-5xl  font-extrabold p-5 border-b-2 hover:scale-110"
        href="https://github.com/sajadzshoki/Task-manager"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-t to-stone-950 from-blue-800 ">
          This project Github Link
        </span>
      </a>

      {/* <div className="p-5 grid grid-cols-dashboard gap-y-5 "> */}
      <div className="p-5 flex flex-wrap gap-5 mt-4 ">
        {notes.length > 0 && <RecentNotes />}
        <BudgetSmall />
      </div>
    </div>
  );
};

export default Dashboard;
