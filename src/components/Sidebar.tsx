import {
  // useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/constant";
import { AiOutlineMenu } from "react-icons/ai";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`w-60 h-full flex flex-col items-start bg-gradient-to-t from-blue-800 to-blue-600 rounded-xl shadow-xl relative duration-75 ${
        isOpen ? "right-0" : "right-[14.9rem]"
      }`}
    >
      <button
        className={`absolute top-5 rounded-full p-2 ${
          isOpen
            ? "right-2 text-white hover:bg-blue-700"
            : "right-[-2.5rem] hover:bg-sky-300 "
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu size="1.5em" color="" />
      </button>

      <Link to="/">
        <h1 className="text-2xl font-bold  text-white p-5">Task Manager</h1>
      </Link>

      {categories.map((category) => (
        // functinal is open bg color 
        <button
          className={`text-white my-2 pl-5 flex gap-5 items-center  w-full rounded-xl py-4
          ${
            category.name !== "Logout"
              ? "hover:bg-blue-900"
              : "hover:bg-red-700"
          }
          `}
          key={category.name}
          onClick={() => {}}
        >
          <span>{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
