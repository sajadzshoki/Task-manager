import React from "react";
import RecentNotes from "./RecentNotes";
import { StateContext } from "../../context/NotesContext";
import { useContext } from "react";
const Dashboard = () => {
  const { notes } = useContext(StateContext);
  return (
    <div>
      <div
        className="delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400"
      >

      <a
        className=" mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        href="https://github.com/sajadzshoki/Task-manager"
        >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          This project Github Link
        </span>
      </a>
        </div>

      <div className="p-5 grid grid-cols-dashboard gap-y-5">
        {notes.length > 0 && <RecentNotes />}
      </div>
    </div>
  );
};

export default Dashboard;
