
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

import { useSelectedCategory} from "../ZustandStore"


const Feed = () => {

//zustand 
const selectedCategory = useSelectedCategory((state)=>state.selectedCategory)

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
