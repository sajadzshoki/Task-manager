import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
type props = {
    complete: string[];
    setComplete: React.Dispatch<React.SetStateAction<string[]>>;
  };
const Complete = ({complete,setComplete}:props) => {
  return (
    <div className="w-72 shadow-md rounded bg-white p-3  border-t-4  border-green-400 max-h-[600px] overflow-auto">
      <div className="flex justify-between items-center mb-4">
        {/* go to to do list  */}
        <h1 className="text-lg">Complete</h1>
        <button onClick={() => {}}>
          <BsThreeDotsVertical size="1.2em" />
        </button>
      </div>
      {complete.map((text) => (
        <div
          className="bg-gray-100 p-4 rounded-sm mb-3 relative"
          draggable
          onDragStart={() => {}}
        >
          <input className="mb-4 bg-gray-100" value={text} onChange={()=>setComplete}/>

          <button className="absolute right-2 bottom-2">
            <AiOutlineDelete
              size="1.3em"
              className="hover:text-red-600 active:scale-95"/>
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

export default Complete;
