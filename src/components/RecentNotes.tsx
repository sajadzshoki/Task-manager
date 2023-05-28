import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdDone ,MdRemoveDone } from "react-icons/md";
// import Notes from "./Notes";
import { StateContext } from "../context/AppContext";
import { useContext, useState } from "react";
const RecentNotes = () => {
  const { notes, setNotes } = useContext(StateContext);
  const [done, setDone] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  // this function is available in Notes component , how do use it hear ?
  const deleteNote = (id: number) => {
    const newNotes = notes.filter((note: string | any) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div>
      {/* or w-3/12 */}
      <div
        className="w-72 shadow-md bg-white p-3 rounded-md max-h-[600px] overflow-auto"
      >
        <div className="flex justify-between items-center mb-4 relative">
          {/* go to to do list  */}
          <h1 onClick={() => {}} className=" text-lg cursor-pointer">
            Recent notes
          </h1>
          <button onClick={() => {}}>
            <BsThreeDotsVertical size="1.2em" onClick={()=>setDropDown(!dropDown)}/>
          </button>
          <div className={`bg-blue-600 absolute top-10 right-1 z-10  rounded shadow-2xl ${!dropDown?"hidden":"block"}`}>
            <p className="text-white hover:bg-blue-700 cursor-pointer p-3">Remove Recent Notes</p>
            <p className="text-white hover:bg-blue-700 cursor-pointer p-3 mt-3">Option 2</p>
            <p className="text-white hover:bg-blue-700 cursor-pointer p-3 mt-3">Option 3</p>
          </div>
        </div>

        {notes.map((note: any) => (
          <div
            className={`${
              !done ? "bg-sky-100" : "bg-green-200"
            } p-4 rounded-2xl mb-3 relative`}
          >
            <p className="mb-4">{note.text}</p>

            <button className="absolute right-2 bottom-2">
              <MdDelete
                size="1.3em"
                className="hover:text-red-600 active:scale-95"
                onClick={() => deleteNote(note.id)}
                title="Delete Note"
              />
            </button>
            <button className="absolute right-10 bottom-2">
              {!done ? (
                <MdDone
                  size="1.3em"
                  className="hover:text-green-400 active:scale-95"
                  onClick={() => setDone(!done)}
                  title="Done"
                />
              ) : (
                <MdRemoveDone onClick={() => setDone(!done)} title="UnDone" className="hover:text-red-500 active:scale-95"/>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNotes;
