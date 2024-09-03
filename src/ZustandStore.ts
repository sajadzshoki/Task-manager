import { create } from "zustand";

type isOpen = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export const useIsOpen = create<isOpen>((set) => ({
  isOpen: true, //initial state
  setIsOpen: (isOpen: boolean) => set({ isOpen }), // update state
}));



type category = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export const useSelectedCategory = create<category>((set) => ({
  selectedCategory: "Tasks",
  setSelectedCategory: (selectedCategory: string) => set({ selectedCategory }),
  
  // chatgpt solution
  // setSelectedCategory: (category: string) =>
  //   set(() => ({ selectedCategory: category })),
}));
