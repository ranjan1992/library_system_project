import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "../data/books";

const bookSlice = createSlice({
  name: "books",
  initialState: booksData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      return state.filter((b) => b.id !== id);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
