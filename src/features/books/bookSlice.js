import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//creating asyncThunk fetchBooks
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await axios.get(
      "https://books-backend-redux-practice.vercel.app/books"
    );

    // console.log("inside thunk");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error fetching books", error);
    throw error;
  }
});

export const deleteBookAsync = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    try {
      const response = await axios.delete(
        `https://books-backend-redux-practice.vercel.app/books/${bookId}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Error in delete book", error);
    }
  }
);

export const addBookAsync = createAsyncThunk(
  "book/addBook",
  async (newBook) => {
    const response = await axios.post(
      "https://books-backend-redux-practice.vercel.app/books",
      newBook
    );
    console.log("inside addBook Async", response.data);
    return response.data;
  }
);

export const bookSlice = createSlice({
  name: "BOOKS",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "Success";
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "Error";
      state.error = action.error.message;
    });
    builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
      state.status = "Success";
      const { _id } = action.payload.book;
      state.books = state.books.filter((book) => book._id !== _id);
      //or I can use action.meta.arg to get the id
    });
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
  },
});

export default bookSlice.reducer;
