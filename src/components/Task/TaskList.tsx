// TaskList.tsx
import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import { FcDeleteDatabase } from "react-icons/fc";
import { BsArrowRightCircleFill } from "react-icons/bs";
type TaskListProps = {
  tasks: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  remove: (index: number) => void;
  newInput: string;
  setNewInput: React.Dispatch<React.SetStateAction<string>>;
  add: () => void;
  removeAll: () => void;
  title: string;
  deleteAllTitle: string;
  BorderColor :string
};

const TaskList = ({
  tasks,
  handleChange,
  handleKeyPress,
  remove,
  newInput,
  setNewInput,
  add,
  removeAll,
  title,
  deleteAllTitle,
  BorderColor
}: TaskListProps) => {

  return (
    <div className={`w-72 shadow-md rounded bg-white p-3 border-t-4 ${BorderColor} overflow-auto`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button title={deleteAllTitle} onClick={removeAll}>
          <FcDeleteDatabase size={"1.3rem"} />
        </button>
      </div>
      {tasks.map((text, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-lg mb-3 relative"
          draggable
        >
          <input
            type="text"
            className="mb-4 bg-gray-100 pr-4 focus:outline-none "
            value={text}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="absolute right-2 bottom-10"
            onClick={() => remove(index)}
            title="delete"
          >
            <BsArrowRightCircleFill size="1.3em" className="hover:text-blue-600 active:scale-95" />
          </button>
          <button
            className="absolute right-2 bottom-2"
            onClick={() => remove(index)}
            title="delete"
          >
            <AiOutlineDelete size="1.3em" className="hover:text-red-600 active:scale-95" />
          </button>
        </div>
      ))}
      <div className="flex">
        <input
          type="text"
          className="bg-gray-100 w-full pr-4 focus:outline-none h-auto"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="flex justify-center items-center mt-4 ml-2 text-gray-500 hover:text-black"
          onClick={add}
        >
          Add
          <IoAddSharp size="1.2em" className="ml-2 border rounded-full border-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TaskList;
