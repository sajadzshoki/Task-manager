import { useContext } from "react";
import { StateContext } from "../context/AppContext";
import {
  Dashboard,
  Navbar,
  Finance,
  Setting,
  TodoList,
  Shopping,
  Analytics,
  Calendar,
} from "../components";

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
      {stateContext?.selectedCategory === "Finance" && <Finance />}
      {stateContext?.selectedCategory === "To Do List" && <TodoList />}
      {stateContext?.selectedCategory === "Shopping" && <Shopping />}
      {stateContext?.selectedCategory === "Analytics" && <Analytics />}
      {stateContext?.selectedCategory === "Setting" && <Setting />}
      {stateContext?.selectedCategory === "Calendar" && <Calendar />}
    </div>
  );
};

export default Feed;
