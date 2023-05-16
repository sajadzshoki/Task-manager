/* eslint-disable @typescript-eslint/no-unused-vars */
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { expenses, weekDays } from "../utils/constant";

const Finance = () => {
  return (
    <div className="m-6">
      {weekDays.map((day) => (
        <small>{day}</small>
      ))}
      {expenses.map((expenses, index) => (
        <div
          className={`bg-white w-[95%] flex items-center px-2 mb-6 shadow-md h-14 rounded-2xl border-l-4 ${expenses.color} relative`}
        >
          <h1 className="w-[8rem]" key={index}>
            {expenses.name}
          </h1>
          <div className="flex justify-between items-center w-full ">
            {expenses.prices.map((price) => (
              <input
                className="max-w-[60px] border-2 rounded-md px-1"
                value={`$${price}`}
                key={index}
              />
            ))}
          </div>
          {/* functional */}
          <button
            className="absolute right-[-2rem] active:scale-95"
            title="Edit"
          >
            <CiEdit size="1.3em" className="hover:text-blue-600 " />
          </button>
          <button
            className="absolute right-[-4rem] active:scale-95"
            title="Delete"
          >
            <CiTrash size="1.3em" className="hover:text-red-600 " />
          </button>
        </div>
      ))}
      {/* functional */}
      <button className="bg-blue-500 hover:bg-blue-600 active:scale-95 shadow-md text-white p-3 rounded-xl">
        Add New Expense
      </button>
    </div>
  );
};

export default Finance;
