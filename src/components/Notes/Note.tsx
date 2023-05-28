
import { MdDeleteForever } from "react-icons/md";
export type propsType = {
  id : number
  text: String
  date : any
  handleDeleteNote : any
}
const Note = ({ id, text, date, handleDeleteNote }:propsType) => {
  return (
    <div className="bg-sky-400 rounded-xl p-4 min-h-[10rem] shadow-md relative overflow-x-auto">
      <span>{text}</span>
      <div className="absolute right-2 bottom-4 flex items-center">
        <small>{date}</small>
        <button className="hover:text-red-500 text-2xl">
          <MdDeleteForever onClick={() => handleDeleteNote(id)} />
        </button>
      </div>
    </div>
  );
};

export default Note;
