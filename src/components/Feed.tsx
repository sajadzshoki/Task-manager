import { useState } from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Finance from "./Finance";
import TodoList from "./TodoList";

const Feed = () => {
  
  return (
    // ml-12 functional isopen
    <div className="bg-sky-50 h-auto flex-auto rounded-xl duration-75 overflow-y-scroll overflow-x-hidden ">
      <Navbar />
      {/* <Dashboard /> */}
      <Finance />
      {/* <TodoList /> */}
    </div>
  );
};

export default Feed;
