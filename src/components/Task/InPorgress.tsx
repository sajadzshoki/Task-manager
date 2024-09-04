import TaskList from './TaskList';
import { useTasks} from '../../hook/useTasks';

const InPorgress = ({ inPorgress, setInPorgress, handleOnDrop }: { inPorgress: string[], setInPorgress: React.Dispatch<React.SetStateAction<string[]>>, handleOnDrop: (e: React.DragEvent) => void }) => {
  const { tasks, newInput, setNewInput, handleChange, add, handleKeyPress, remove, removeAll } = useTasks(inPorgress, () => setInPorgress([]));

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
      title="In Progress"
      deleteAllTitle="Remove all" 
      BorderColor="border-green-500"     
    />
  );
};

export default InPorgress;








// import { FcDeleteDatabase } from "react-icons/fc";
// import { IoAddSharp } from "react-icons/io5";
// import { AiOutlineDelete } from "react-icons/ai";
// import { useState } from "react";

// type props = {
//   inPorgress: string[];
//   setInPorgress: React.Dispatch<React.SetStateAction<string[]>>;
//   handleOnDrop: (e: React.DragEvent) => void;
// };
// const InPorgress = ({ inPorgress, setInPorgress, handleOnDrop }: props) => {
//   const [newInput, setNewInput] = useState<string>("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const updateInProgress = [...inPorgress];
//     updateInProgress[index] = e.currentTarget.value;
//     setInPorgress(updateInProgress);
//   };
//   const add = () => {
//     setInPorgress([...inPorgress, newInput.trim()]);
//     setNewInput("");
//   };
//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       add();
//     }
//   };
//   const remove = (index: number) => {
//     const updatedBacklog = inPorgress.filter((_, i) => i !== index);
//     setInPorgress(updatedBacklog);
//   };

//   return (
//     <div
//       className="w-72 shadow-md rounded bg-white p-3  border-t-4  border-orange-400"
//       onDrop={handleOnDrop}
      
//     >
//       <div className="flex justify-between items-center mb-4">
//         {/* go to to do list  */}
//         <h1 className="text-xl font-semibold">In Progress</h1>
//         <button onClick={() => {}}>
//         <FcDeleteDatabase size={"1.3rem"}/>
//         </button>
//       </div>
//       {inPorgress.map((text, index) => (
//         <div
//           className="bg-gray-100 p-4 rounded-lg mb-3 relative"
//           draggable
//           onDragStart={() => {}}
//         >
//           <input
//             className="mb-4 bg-gray-100 w-full pr-4 focus:outline-none h-"
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

// export default InPorgress;
