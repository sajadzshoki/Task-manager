
import React, { useContext } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Notes/NoteList";
import { StateContext } from "../context/NotesContext";


function Notes() {
  const {notes,setNotes} = useContext(StateContext);

  const addNote = (text:any) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // ??????????????????
    const newNotes:any = [...notes, newNote];
    setNotes(newNotes);
  };


   const deleteNote = (id:number) => {
    const newNotes = notes.filter((note:string| any) => note.id !== id);
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

