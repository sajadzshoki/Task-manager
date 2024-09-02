import { nanoid } from "nanoid";
import { SetStateAction, createContext, useState } from "react";


type ContextProviderProps = {
  children: React.ReactNode;
};

type StateContextType = {
  // notes: string | Array<string | number> | any //any becuse filter method in notes gives error;
  notes: {
    id: string;
    text: string;
    date: string;
    done:boolean;
  }|any;
  // setNotes: React.Dispatch<SetStateAction<string>>;
  setNotes: React.Dispatch<
    SetStateAction<
      {
        id: string;
        text: string;
        date: string;
        done:boolean
      }[]
    >
  >;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const ContextProvider = ({ children }: ContextProviderProps) => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the first note",
      date: "12/11/2022",
      done:false
    },
    {
      id: nanoid(),
      text: "this is the second note",
      date: "14/11/2022",
      done:false
      
    },
  ]);

  return (
    <StateContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

