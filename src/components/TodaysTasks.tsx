import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
const TodaysTasks = () => {
  return (
    <div>
      {/* or w-3/12 */}{" "}
      <div
        className="w-72 shadow-md bg-white
   p-3 rounded-md border-t-4  border-t-green-300 max-h-[600px] overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          {/* go to to do list  */}
          <h1 onClick={() => {}} className=" text-lg cursor-pointer">
            Today's Tasks
          </h1>
          <button onClick={() => {}}>
            <BsThreeDotsVertical size="1.2em" />
          </button>
        </div>

        {/* functional */}
        <div className="bg-sky-100 p-4 rounded-2xl mb-3 relative">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet expedita distinctio tenetur, mollitia commodi
            maiores .
          </p>
          <button className="absolute right-2 bottom-2">
            <MdDelete size="1.3em" className="hover:text-red-600" />
          </button>
          <button className="absolute right-10 bottom-2">
            <MdDone size="1.3em" className="hover:text-green-400" />
          </button>
        </div>
        <div className="bg-sky-100 p-4 rounded-2xl mb-3 relative">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="absolute right-2 bottom-2">
            <MdDelete size="1.3em" className="hover:text-red-600" />
          </button>
          <button className="absolute right-10 bottom-2">
            <MdDone size="1.3em" className="hover:text-green-400" />
          </button>
        </div>
        <div className="bg-sky-100 p-4 rounded-2xl mb-3 relative">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur
          </p>
          <button className="absolute right-2 bottom-2">
            <MdDelete size="1.3em" className="hover:text-red-600" />
          </button>
          <button className="absolute right-10 bottom-2">
            <MdDone size="1.3em" className="hover:text-green-400" />
          </button>
        </div>
        <button
          className=" p-2 rounded-full bg-green-300 hover:bg-sky-300"
          onClick={() => {}}
        >
          <IoAddSharp size="1.2em" />
        </button>
      </div>
    </div>
  );
};

export default TodaysTasks;
