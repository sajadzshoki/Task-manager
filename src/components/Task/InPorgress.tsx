import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

type props = {
    inPorgress : string[]
    setInPorgress: React.Dispatch<React.SetStateAction<string[]>>
    handleOnDrop : (e: React.DragEvent) => void
}
const InPorgress = ({inPorgress,setInPorgress,handleOnDrop}:props) => {
  const handleDragOver =(e:React.DragEvent)=>{
    e.preventDefault()
  }
  return (
    <div className="w-72 shadow-md rounded bg-white p-3  border-t-4  border-orange-400" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <div className="flex justify-between items-center mb-4">
        {/* go to to do list  */}
        <h1 className="text-lg">In Progress</h1>
        <button onClick={() => {}}>
          <BsThreeDotsVertical size="1.2em" />
        </button>
      </div>
      {inPorgress.map((text) => (
        <div
          className="bg-gray-100 p-4 rounded-sm mb-3 relative"
          draggable
          onDragStart={() => {}}
        >
          <input className="mb-4 bg-gray-100" value={text} onChange={()=>setInPorgress}/>

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

export default InPorgress;
