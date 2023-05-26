import React from "react";
type propsType ={
  handleAddNote : any
}
function AddNote({ handleAddNote}:propsType ) {
  const [noteText, setNoteText] = React.useState("");
  const characterLimit = 200;

  const handleLimit = (event:any) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="bg-lime-300 rounded-xl p-4 min-h-[10rem] shadow-md relative overflow-x-auto">
      <textarea
        className="w-[14rem] h-[10rem] border-none resize-none focus:outline-none bg-transparent "
        placeholder="Add a new note"
        value={noteText}
        onChange={handleLimit}
      />
      <div className="flex items-center justify-between save-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
export default AddNote;
