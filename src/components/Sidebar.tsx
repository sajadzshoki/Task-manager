import { Link } from "react-router-dom";
import { categories } from "../utils/constant";
import { useContext } from "react";
import { StateContext } from "../context/AppContext";
import { CiLogout } from "react-icons/ci";
import { SiTask } from "react-icons/si";

const Sidebar = () => {
  const stateContext = useContext(StateContext);
  const buttonStyles = [
    `text-white my-2 pl-5 flex gap-5 items-center  w-full rounded-xl py-4
  active:scale-95 `,
  ];

  return (
    <div
      className={`w-56 h-full flex flex-col items-start bg-gradient-to-t from-blue-800 to-blue-600 rounded-xl shadow-xl relative duration-75 overflow-x-scroll ${
        stateContext?.isOpen ? "right-0" : "ml-[-15.9rem]"
      }`}
    >
      <div className="flex items-center p-4">
        <SiTask color="white" size="1.5rem"/>
        <h1 className="text-2xl font-bold  text-white ml-2">Task Manager</h1>
      </div>

      {categories.map((category) => (
        <button
          className={`${buttonStyles}
          ${
            category.name === stateContext?.selectedCategory && "bg-blue-800 "
          }`}
          key={category.name}
          onClick={() => stateContext?.setSelectedCategory(category.name)}
        >
          <span>{category.icon}</span>
          {category.name}
        </button>
      ))}
      <Link to="/login">
        <button
          className={`hover:bg-red-500 absolute bottom-0 font-medium text-lg bg-blue-800 ${buttonStyles}`}
        >
          <CiLogout color="white" size="1.5em" />
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
