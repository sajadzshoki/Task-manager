import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdDone, MdRemoveDone } from "react-icons/md";
// import Notes from "./Notes";
import { StateContext } from "../../context/NotesContext";
import { useContext, useState } from "react";
import { useSelectedCategory } from "../../ZustandStore";
import useClickOutside from "../../hooks/useClickOutside";

const RecentNotes = () => {
  const { notes, setNotes } = useContext(StateContext);

  // dropdown
  const [dropDown, setDropDown] = useState(false);
  const closeDropdown = () => {
    setDropDown(false);
  };
  const dropdownRef = useClickOutside(closeDropdown);

  // category
  const setSelectedCategory = useSelectedCategory(
    (state) => state.setSelectedCategory
  );
  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  //I can make a costume hook for this to use it hear and in notes component
  const deleteNote = (id: number) => {
    const newNotes = notes.filter((note: string | any) => note.id !== id);
    setNotes(newNotes);
  };
  const toggleNoteStatus = (id: number) => {
    const updatedNotes = notes.map((note: any) => {
      if (note.id === id) {
        return { ...note, done: !note.done };
      }
      return note;
    });
    // Update the notes with the modified 'done' property
    setNotes(updatedNotes);
  };

  return (
    <div>
      {/* or w-3/12  overflow-auto*/}
      <div className="w-72 shadow-md bg-white p-3 rounded-md max-h-[600px] ">
        <div ref={dropdownRef} className="flex justify-between items-center mb-4 relative">
          {/* go to to do list  */}
          <h1
            onClick={() => handleCategoryChange("Notes")}
            className=" text-lg cursor-pointer"
          >
            Recent notes
          </h1>
          <button  onClick={() => {}}>
            <BsThreeDotsVertical
              size="1.2em"
              onClick={() => setDropDown(!dropDown)}
            />
          </button>
          <div 
            className={`bg-blue-600 absolute top-10 right-1 z-10  rounded shadow-2xl ${
              !dropDown ? "hidden" : "block"
            }`}
            
          >
            <p className="text-white hover:bg-blue-700 cursor-pointer p-3">
              Remove Recent Notes
            </p>
            <p className="text-white hover:bg-blue-700 cursor-pointer p-3 mt-3">
              Option 2
            </p>
            <p className="text-white hover:bg-blue-700 cursor-pointer p-3 mt-3">
              Option 3
            </p>
          </div>
        </div>

        {notes.map((note: any) => (
          <div
            className={`${
              !note.done ? "bg-sky-100" : "bg-green-200"
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
              {!note.done ? (
                <MdDone
                  size="1.3em"
                  className="hover:text-green-400 active:scale-95"
                  onClick={() => toggleNoteStatus(note.id)}
                  title="Done"
                />
              ) : (
                <MdRemoveDone
                  onClick={() => toggleNoteStatus(note.id)}
                  title="UnDone"
                  className="hover:text-red-500 active:scale-95"
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNotes;
