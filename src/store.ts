import { create } from "zustand";

// type category = {
//   selectedCategory: string;
// };

type isOpen = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useIsOpen = create<isOpen>((set) => ({
  isOpen: true, //initial state
  setIsOpen: (isOpen: boolean) => set({ isOpen }),// update state
}));

// export const useSelectedCategoty = create<category>(() => ({
//   selectedCategory: "Dashboard",
// }));
