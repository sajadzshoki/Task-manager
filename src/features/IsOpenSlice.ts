
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IsOpenState ={
  isOpen: boolean;
}

const initialState: IsOpenState = {
  isOpen: true,
};

const isOpenSlice = createSlice({
  name: 'isOpen',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = isOpenSlice.actions;

export default isOpenSlice.reducer;
