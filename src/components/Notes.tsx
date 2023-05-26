
import React, { useContext } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Notes/NoteList";
import { StateContext } from "../context/AppContext";


function Notes() {
  // const stateContext = useContext(StateContext);
  const [notes, setNotes] = React.useState([
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

  // React.useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
  

  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);
  // React.useEffect(() => {
  //   localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  // }, [notes]);

  const addNote = (text:any) => {
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
  const deleteNote = (id:string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    
    <div className="p-4">
   
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
   
  );
}

export default Notes;

