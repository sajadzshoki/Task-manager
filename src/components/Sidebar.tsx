import { Link } from "react-router-dom";
import { categories } from "../utils/constant";
import { useContext } from "react";
import { StateContext } from "../context/AppContext";


const Sidebar = () => {
  const stateContext = useContext(StateContext)

  return (
    <div
      className={`w-56 h-full flex flex-col items-start bg-gradient-to-t from-blue-800 to-blue-600 rounded-xl shadow-xl relative duration-75 ${
        stateContext?.isOpen ? "right-0" : "ml-[-15.9rem]"
      }`}
    >
      <Link to="/">
        <h1 className="text-2xl font-bold  text-white p-5">Task Manager</h1>
      </Link>

      {categories.map((category) => (
        
        <button
          className={`text-white my-2 pl-5 flex gap-5 items-center  w-full rounded-xl py-4
          active:scale-95 
          ${ category.name !== "Logout"? "hover:bg-blue-900 ": "hover:bg-red-600" }
          ${category.name === stateContext?.selectedCategory && "bg-blue-800 "}`}
          key={category.name}
          onClick={() => stateContext?.setSelectedCategory(category.name)}
        >
          <span>{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
