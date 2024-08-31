import { FiSearch } from "react-icons/fi";
import profile from "../assets/profile.png";
import { AiOutlineMenu } from "react-icons/ai";

import { useIsOpen, useSelectedCategory } from "../store";

const Navbar = () => {
  //zustand
  const selectedCategory = useSelectedCategory(
    (state) => state.selectedCategory
  );

  const isOpen = useIsOpen((state) => state.isOpen);
  const setIsOpen = useIsOpen((state) => state.setIsOpen);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    // z-10 becuse of dashboard elements
    <div className="flex justify-between items-center w-full mb-4 border-b-2 pb-3 sticky top-0 bg-sky-50 p-4 z-10 ">
      <div className="flex">
        <button
          className=" mr-2 rounded-full p-2 hover:bg-sky-200"
          onClick={toggleIsOpen}
        >
          <AiOutlineMenu size="1.5em" />
        </button>

        <h1 className="text-3xl font-semibold">{selectedCategory}</h1>
      </div>

      <div className="relative w-2/6 ">
        <button>
          <FiSearch className="absolute top-2.5 right-3 hover:text-blue-500 active:scale-95" />
        </button>
        <input
          placeholder="Search"
          type="text"
          className="rounded-full border-none outline-none px-3 h-9 w-full focus:shadow-md"
          //value=""
          onChange={() => {}}
        />
      </div>

      {/* functional  */}
      <div className="flex items-center">
        <p> Sajad shoki </p>
        <img
          alt="profile pic "
          src={profile}
          className="object-contain w-14 h-14 ml-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
