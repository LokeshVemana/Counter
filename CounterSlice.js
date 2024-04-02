import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchTodos = createAsyncThunk("Counter/fetchTodos", async () => {
//   const response = await axios.get("http://localhost:3002/posts");

//   return response.data;
// });
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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTodos.pending, (state) => {
  //       state.error = null;
  //       state.todos = [];
  //       state.loading = true;
  //     })
  //     .addCase(fetchTodos.fulfilled, (state, action) => {
  //       state.error = null;
  //       state.todos = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchTodos.rejected, (state, action) => {
  //       state.error = action.error.message;
  //       state.todos = [];
  //       state.loading = false;
  //     });
  // },
});
//for dispatch this we need to export//
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;  //for communicate reducer to store//
