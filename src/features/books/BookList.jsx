import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteBookAsync, fetchBooks } from "./bookSlice";

export default function BookList({ books }) {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  // console.log("Book List ");
  // console.log(books);
  const clickHandler = (id) => {
    dispatch(deleteBookAsync(id));
    setSuccessMessage("Book deleted successfully.");
    dispatch(fetchBooks());
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Book List</h2>
        {successMessage && <h4>{successMessage} </h4>}
        <ul>
          {books.map((book) => {
            return (
              <li key={book._id} className="my-2">
                {" "}
                {book.title} - Author: {book.author} - Genre: {book.genre}
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => clickHandler(book._id)}
                >
                  {" "}
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
