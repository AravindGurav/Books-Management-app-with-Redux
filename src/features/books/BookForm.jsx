import Header from "../../components/Header";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookAsync } from "./bookSlice";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookObj = {
      title,
      author,
      genre,
    };

    if (!title || !author || !genre) {
      setError("All fields are required");
    } else {
      dispatch(addBookAsync(bookObj))
        .then(() => setSuccessMessage("Book added successfuly."))
        .catch((error) => console.log("Error adding book", error));
    }
  };

  return (
    <div>
      <Header />
      <div className="p-3 my-2">
        {successMessage && <p> {successMessage}</p>}
        {error && <p> {error}</p>}
        <h4> Add Book </h4>
        <form className="my-3" onSubmit={handleSubmit}>
          <label> Book Name: </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />{" "}
          <br />
          <br />
          <label> Author Name: </label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />{" "}
          <br />
          <br />
          <label> Genre: </label>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />{" "}
          <br /> <br />
          <button type="submit">Add </button>
        </form>
      </div>
    </div>
  );
};
export default BookForm;
