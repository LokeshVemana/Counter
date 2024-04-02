import { createSlice } from "@reduxjs/toolkit";
const CounterSlice = createSlice({
  name: "Counter",
  initialState: {
    Counter: 0,
    todos: [],
    error: null,
    loading: false,
  },
  reducers: {
    increment: (state) => {
      state.Counter += 1;
    },
    decrement: (state) => {
      state.Counter -= 1;
    },
  },
});
//for dispatch this we need to export//
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;  //for communicate reducer to store//
