import TaskList from "./TaskList"; // BackLog.tsx
import { useTasks} from "../../hook/useTasks";

const BackLog = ({
  backlog,
  setBacklog,
  handleOnDrag,
}: {
  backlog: string[];
  setBacklog: React.Dispatch<React.SetStateAction<string[]>>;
  handleOnDrag: (e: React.DragEvent, widgetType: string) => void;
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
  } = useTasks(backlog, () => setBacklog([]));

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
      title="Backlog"
      deleteAllTitle="Remove all"
      BorderColor="border-red-400"
    />
  );
};

export default BackLog;

// import { FcDeleteDatabase } from "react-icons/fc";
// import { IoAddSharp } from "react-icons/io5";
// import { AiOutlineDelete } from "react-icons/ai";
// import { useState } from "react";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { BsArrowRightCircleFill } from "react-icons/bs";

// type props = {
//   backlog: string[];
//   setBacklog: React.Dispatch<React.SetStateAction<string[]>>;
//   handleOnDrag: (e: React.DragEvent, widgetType: string) => void;
// };

// const BackLog = ({ backlog, setBacklog, handleOnDrag }: props) => {
//   const [newInput, setNewInput] = useState<string>("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const updatedBacklog = [...backlog];
//     updatedBacklog[index] = e.currentTarget.value;
//     setBacklog(updatedBacklog);
//   };

//   const add = () => {
//     setBacklog([...backlog, newInput.trim()]);
//     setNewInput("");
//   };

//   const remove = (index: number) => {
//     const updatedBacklog = backlog.filter((_, i) => i !== index);
//     setBacklog(updatedBacklog);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       add();
//     }
//   };
//   const removeAll = () => {
//     confirmAlert({
//       title: 'Confirm to delete',
//       message: 'Are you sure you want to delete Backlogs?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => setBacklog([]) // Clears all backlog tasks
//         },
//         {
//           label: 'No',
//           onClick: () => {} // Do nothing if "No" is clicked
//         }
//       ]
//     });
//   };
//   return (
//     <div className="w-72 shadow-md rounded bg-white p-3 border-t-4  border-violet-400  overflow-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-semibold">Backlog</h1>
//         <button title="remove all" onClick={() =>removeAll()}>
//         <FcDeleteDatabase size={"1.3rem"}/>
//         </button>
//       </div>
//       {backlog.map((text, index) => (
//         <div
//           className="bg-gray-100 p-4 rounded-lg mb-3 relative"
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "hi")}
//         >
//           <input
//             type="text"
//             className="mb-4 bg-gray-100 w-full pr-4 focus:outline-none h-auto"
//             value={text}
//             onChange={(e) => handleChange(e, index)}
//             onKeyDown={handleKeyPress}
//           />
//           <button
//             className="absolute right-10 bottom-2"
//             onClick={() => remove(index)}
//             title="delete"
//           >
//             <AiOutlineDelete
//               size="1.3em"
//               className="hover:text-red-600 active:scale-95"

//             />
//           </button>
//           <button
//             className="absolute right-2 bottom-2"
//             title="move to in progress"
//           >
//             <BsArrowRightCircleFill
//               size="1.3em"
//               className="hover:text-blue-700 active:scale-95 text-blue-500"
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

// export default BackLog;
