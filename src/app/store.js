import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/books/bookSlice";

const store = configureStore({
  reducer: {
    book: bookSlice,
  },
});
export default store;
