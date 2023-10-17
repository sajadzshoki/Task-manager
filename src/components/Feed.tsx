import { useContext } from "react";
import { StateContext } from "../context/AppContext";
import {
  Dashboard,
  Navbar,
  Finance,
  Setting,
  Notes,
  Shopping,
  Analytics,
  CalendarCmp,
} from "../components";
import Tasks from "./Tasks";

import { useAppSelector } from "../app/hooks";

import { RootState } from '../app/store';
const Feed = () => {
  // const stateContext = useContext(StateContext);
  const selectedCategory = useAppSelector((state:RootState)=>state.category.selectedCategory)
  // another way ???????!!!!!!!!!!!!!!!
  // const components = {
  //   dashboard:<Dashboard/>
  //   two:<Two/>
  //   three:<Three/>
  // }
  // {components[selected.title]}

  return (
    <div className="bg-sky-50 h-auto flex-auto rounded-xl duration-75 overflow-y-scroll overflow-x-hidden ">
      <Navbar />
      {selectedCategory === "Dashboard" && <Dashboard />}
      {selectedCategory === "Tasks" && <Tasks />}
      {selectedCategory === "Finance" && <Finance />}
      {selectedCategory === "Notes" && <Notes />}
      {selectedCategory === "Shopping" && <Shopping />}
      {selectedCategory === "Analytics" && <Analytics />}
      {selectedCategory === "Setting" && <Setting />}
      {selectedCategory === "Calendar" && <CalendarCmp />}
    </div>
  );
};

export default Feed;
