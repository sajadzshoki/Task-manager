// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// // import { RootState, AppThunk } from '../../app/store';
// // import { fetchCount } from './counterAPI';

// export interface CategoryState {
//   value: string;
// //   status: 'idle' | 'loading' | 'failed';
// }

// const initialState: CategoryState = {
//   value: "Dashboard",
// //   status: 'idle',
// };

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
// // export const incrementAsync = createAsyncThunk(
// //   'counter/fetchCount',
// //   async (amount: number) => {
// //     const response = await fetchCount(amount);
// //     // The value we return becomes the `fulfilled` action payload
// //     return response.data;
// //   }
// // );

// export const categorySlice = createSlice({

// );

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

// export default counterSlice.reducer;
export {}