import  { useState } from "react";
import { nanoid } from "nanoid";
const TodoList = () => {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the first note",
      date: "12/11/2022",
    },
    {
      id: nanoid(),
      text: "this is the second note",
      date: "14/11/2022",
    },
  ]);
  const characterLimit = 200;

  const handleLimit = (event: any) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // ??????????????????
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      setNoteText("");
      addNote(noteText);
    }
  };
  return (
    <div className="p-4 bg-slate-200 grid grid-cols-dashboard">
      <div className="w-[14rem] h-[15rem] relative">
        <textarea
          value={noteText}
          onChange={handleLimit}
          placeholder="Add Note . . . "
          className="resize-none bg-green-300 w-[14rem] h-[15rem] rounded-lg p-3 border-none outline-none"
        />
        <small className="absolute bottom-3 left-3">
          {characterLimit - noteText.length} Remaining
        </small>
        <button
          className="bg-sky-300 hover:bg-blue-400 absolute bottom-2 right-3 px-3 py-1 rounded-full text-sm"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoList;
