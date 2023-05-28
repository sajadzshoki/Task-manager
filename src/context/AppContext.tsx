import { nanoid } from "nanoid";
import { SetStateAction, createContext, useState } from "react";

// const initialState ={}

type ContextProviderProps = {
  children: React.ReactNode;
};

type StateContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
  // notes: string | Array<string | number> | any //any becuse filter method in notes gives error;
  notes: {
    id: string;
    text: string;
    date: string;
  }|any;
  // setNotes: React.Dispatch<SetStateAction<string>>;
  setNotes: React.Dispatch<
    SetStateAction<
      {
        id: string;
        text: string;
        date: string;
      }[]
    >
  >;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("Dashboard");
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

  return (
    <StateContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedCategory,
        setSelectedCategory,
        notes,
        setNotes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// import React, { useState, createContext } from 'react'

// type AuthUser = {
//   name: string
//   email: string
// }

// type UserContextType = {
//   user: AuthUser | null
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
// }

// type UserContextProviderProps = {
//   children: React.ReactNode
// }

// // export const UserContext = createContext<UserContextType | null>(null)
// export const UserContext = createContext({} as UserContextType)

// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<AuthUser | null>(null)
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   )
// }
