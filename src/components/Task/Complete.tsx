import TaskList from "./TaskList";
import { useTasks } from "../../hooks/useTasks";

const Complete = ({
  complete,
  setComplete,
}: {
  complete: string[];
  setComplete: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const {
    tasks,
    newInput,
    setNewInput,
    handleChange,
    add,
    handleKeyPress,
    remove,
    removeAll,
  } = useTasks(complete, () => setComplete([]));

  return (
    <TaskList
      tasks={tasks}
      newInput={newInput}
      setNewInput={setNewInput}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
      add={add}
      remove={remove}
      removeAll={removeAll}
      title="Complete"
      deleteAllTitle="Remove all"
      BorderColor="border-green-500"
    />
  );
};

export default Complete;

// import { FcDeleteDatabase } from "react-icons/fc";
// import { IoAddSharp } from "react-icons/io5";
// import { AiOutlineDelete } from "react-icons/ai";
// import { useState } from "react";
// type props = {
//   complete: string[];
//   setComplete: React.Dispatch<React.SetStateAction<string[]>>;
// };
// const Complete = ({ complete, setComplete }: props) => {
//   const [newInput, setNewInput] = useState<string>("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const updateInProgress = [...complete];
//     updateInProgress[index] = e.currentTarget.value;
//     setComplete(updateInProgress);
//   };
//   const add = () => {
//     setComplete([...complete, newInput.trim()]);
//     setNewInput("");
//   };
//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       add();
//     }
//   };
//   const remove = (index: number) => {
//     const updatedBacklog = complete.filter((_, i) => i !== index);
//     setComplete(updatedBacklog);
//   };
//   return (
//     <div className="w-72 shadow-md rounded bg-white p-3  border-t-4  border-green-400  ">
//       <div className="flex justify-between items-center mb-4">
//         {/* go to to do list  */}
//         <h1 className="text-xl font-semibold">Complete</h1>
//         <button onClick={() => {}}>
//         <FcDeleteDatabase size={"1.3rem"}/>
//         </button>
//       </div>
//       {complete.map((text, index) => (
//         <div
//           className="bg-gray-100 p-4 rounded-sm mb-3 relative"
//           draggable
//           onDragStart={() => {}}
//         >
//           <input
//             className="mb-4 bg-gray-100"
//             value={text}
//             onChange={(e) => handleChange(e, index)}
//             onKeyDown={handleKeyPress}
//           />

//           <button
//             className="absolute right-2 bottom-2"
//             onClick={() => remove(index)}
//           >
//             <AiOutlineDelete
//               size="1.3em"
//               className="hover:text-red-600 active:scale-95"
//             />
//           </button>
//         </div>
//       ))}
//       <button
//         className="flex justify-center w-full items-center mt-4 text-gray-500 hover:text-black"
//         onClick={() => add()}
//       >
//         Add
//         <IoAddSharp
//           size="1.2em"
//           className="ml-2 border rounded-full border-gray-600"
//         />
//       </button>
//     </div>
//   );
// };

// export default Complete;
