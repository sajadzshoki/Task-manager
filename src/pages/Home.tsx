import React from "react";
import { Feed, Sidebar } from "../components";
const Home = () => {
  return (
    <div className="h-screen flex flex-row gap-5 py-3 px-4">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Home;
