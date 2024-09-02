
import Note from "./Note";
import AddNote from "./AddNote";
type propsType = {
  notes:{
    id : number
    text: String
    date : any
    map:any
    done: boolean
  }
  // notes:any
  handleDeleteNote : any
  handleAddNote:any

}
export default function NotesList({notes, handleAddNote, handleDeleteNote}:propsType) {
  
  return (
    <div className="grid gap-4 grid-cols-notes-list">
      {/*????????????????? */}
      {notes.map((note:any) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          done={note.done}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote}/>

    </div>
  );
}
