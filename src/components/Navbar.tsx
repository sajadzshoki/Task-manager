import React from "react";
import { FiSearch } from "react-icons/fi";
import profile from "../assets/profile.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-4 border-b-2 pb-3">
      {/* functinal  */}
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      <div className="relative w-2/6 ">
        <FiSearch className="absolute top-2.5 right-3" />
        <input
          placeholder="Search"
          type="text"
          className="rounded-full border-none outline-none px-3 h-9 w-full focus:shadow-md"
          //   value=""
          onChange={() => {}}
        />
      </div>

      {/* functinal  */}
      <div className="flex items-center">
        <p> Sajad shoki </p>
        <img
          alt="profile pic "
          src={profile}
          className="object-contain w-14 h-14 ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
