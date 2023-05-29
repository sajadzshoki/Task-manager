import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import BackLog from "./Task/BackLog";
import InPorgress from "./Task/InPorgress";
import Complete from "./Task/Complete";
import { useState } from "react";

const Tasks = () => {
  const [backlog, setBacklog] = useState<string[]>([
    "make the front-end",
    "refactor the code",
  ]);
  const [inPorgress, setInPorgress] = useState<string[]>(["types checking"]);
  const [complete, setComplete] = useState<string[]>([
    "taking out the garbage",
    "cleaning the house",
    "making dinner",
  ]);

  const handleOnDrag = (e: React.DragEvent, backlog: string) => {
    e.dataTransfer.setData("widgetType", backlog);
  };
  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData("widgetTpe") as string;
    setInPorgress([...inPorgress, widgetType]);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <div className="p-4 flex justify-evenly items-start sm:">
      <BackLog
        backlog={backlog}
        setBacklog={setBacklog}
        handleOnDrag={handleOnDrag}
      />
      <InPorgress
        inPorgress={inPorgress}
        setInPorgress={setInPorgress}
        handleOnDrop={handleOnDrop}
      />
      <Complete complete={complete} setComplete={setComplete} />
    </div>
  );
};

export default Tasks;
