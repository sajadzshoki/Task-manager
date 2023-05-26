
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

const Tasks = () => {
  return (
    <div className="p-4 flex justify-evenly items-start">
        {/* backlog */}
      <div
        className="w-72 shadow-md rounded bg-white p-3 border-t-4  border-violet-400  overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          {/* go to to do list  */}
          <h1 className="text-lg">
            Backlog
          </h1>
          <button onClick={() => {}}>
            <BsThreeDotsVertical size="1.2em" />
          </button>
        </div>
        {/* functional */}
        <div className="bg-gray-100 p-4 rounded-sm mb-3 relative">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur
          </p>
          <button className="absolute right-2 bottom-2">
            <AiOutlineDelete
              size="1.3em"
              className="hover:text-red-600 active:scale-95"
            />
          </button>
        </div>
        <button
          className="flex justify-center w-full items-center mt-4 text-gray-500 hover:text-black"
          onClick={() => {}}
        >
          Add Task
          <IoAddSharp size="1.2em" className="ml-2 border rounded-full border-gray-600"/>
        </button>
      </div>
      {/* in proggres  */}
      <div
        className="w-72 shadow-md rounded bg-white p-3  border-t-4  border-orange-400"
      >
        <div className="flex justify-between items-center mb-4">
          {/* go to to do list  */}
          <h1 className="text-lg">
          In Progress
          </h1>
          <button onClick={() => {}}>
            <BsThreeDotsVertical size="1.2em" />
          </button>
        </div>
        {/* functional */}
        <div className="bg-yellow-50 p-4 rounded-sm mb-3 relative">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellendus sint alias iusto! Rerum hic explicabo nesciunt! Quo fugiat omnis ullam ea molestias id cupiditate, magnam laudantium ipsa asperiores veniam.
          </p>
          <button className="absolute right-2 bottom-2">
            <AiOutlineDelete
              size="1.3em"
              className="hover:text-red-600 active:scale-95"
            />
          </button>
        </div>
        <button
          className="flex justify-center w-full items-center mt-4 text-gray-500 hover:text-black"
          onClick={() => {}}
        >
          Add Task
          <IoAddSharp size="1.2em" className="ml-2 border rounded-full border-gray-600"/>
        </button>
      </div>
      {/* complete */}
      <div
        className="w-72 shadow-md rounded bg-white p-3  border-t-4  border-green-400 max-h-[600px] overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          {/* go to to do list  */}
          <h1 className="text-lg">
          Complete
          </h1>
          <button onClick={() => {}}>
            <BsThreeDotsVertical size="1.2em" />
          </button>
        </div>
        {/* functional */}
        <div className="bg-green-50 p-4 rounded-sm mb-3 relative">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellendus sint alias iusto! Rerum hic explicabo nesciunt! Quo fugiat omnis ullam ea .
          </p>
          <button className="absolute right-2 bottom-2">
            <AiOutlineDelete
              size="1.3em"
              className="hover:text-red-600 active:scale-95"
            />
          </button>
        </div>
        <button
          className="flex justify-center w-full items-center mt-4 text-gray-500 hover:text-black"
          onClick={() => {}}
        >
          Add Task
          <IoAddSharp size="1.2em" className="ml-2 border rounded-full border-gray-600"/>
        </button>
      </div>
    </div>
  );
};

export default Tasks;
