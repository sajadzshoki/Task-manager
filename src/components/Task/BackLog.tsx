  import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

type props = {
  backlog: string[];
  setBacklog: React.Dispatch<React.SetStateAction<string[]>>;
  handleOnDrag:(e: React.DragEvent, widgetType: string) => void
};
const BackLog = ({ backlog, setBacklog,handleOnDrag }: props) => {
  const handleChange = (e: any) => {
     setBacklog(e.currentTarget.value);
  };
  return (
    <div className="w-72 shadow-md rounded bg-white p-3 border-t-4  border-violet-400  overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg">Backlog</h1>
        <button onClick={() => {}}>
          <BsThreeDotsVertical size="1.2em" />
        </button>
      </div>
      {backlog.map((text) => (
        <div
          className="bg-gray-100 p-4 rounded-sm mb-3 relative"
          draggable
          onDragStart={(e) =>handleOnDrag(e,"hi")}
        >
          <input
            className="mb-4 bg-gray-100"
            value={text}
            onChange={handleChange}
            
          />

          <button className="absolute right-2 bottom-2">
            <AiOutlineDelete
              size="1.3em"
              className="hover:text-red-600 active:scale-95"
            />
          </button>
        </div>
      ))}

      <button
        className="flex justify-center w-full items-center mt-4 text-gray-500 hover:text-black"
        onClick={() => {}}
      >
        Add Task
        <IoAddSharp
          size="1.2em"
          className="ml-2 border rounded-full border-gray-600"
        />
      </button>
    </div>
  );
};

export default BackLog;
