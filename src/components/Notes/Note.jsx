import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="bg-sky-400 rounded-xl p-4 min-h-[10rem] shadow-md relative overflow-x-auto">
      <span>{text}</span>
      <div className="absolute right-2 bottom-4 flex ">
        <small>{date}</small>
        <button className="hover:text-red-500 text-xl">
          <MdDeleteForever onClick={() => handleDeleteNote(id)} />
        </button>
      </div>
    </div>
  );
};

export default Note;
