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

const Feed = () => {
  const stateContext = useContext(StateContext);

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
      {stateContext?.selectedCategory === "Dashboard" && <Dashboard />}
      {stateContext?.selectedCategory === "Tasks" && <Tasks />}
      {stateContext?.selectedCategory === "Finance" && <Finance />}
      {stateContext?.selectedCategory === "Notes" && <Notes />}
      {stateContext?.selectedCategory === "Shopping" && <Shopping />}
      {stateContext?.selectedCategory === "Analytics" && <Analytics />}
      {stateContext?.selectedCategory === "Setting" && <Setting />}
      {stateContext?.selectedCategory === "Calendar" && <CalendarCmp />}
    </div>
  );
};

export default Feed;
