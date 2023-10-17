import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import isOpenReducer from '../features/IsOpenSlice';
import selectedCategory from '../features/categorySlice';

export const store = configureStore({
  reducer: {
    isOpen: isOpenReducer,
    category:selectedCategory
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
