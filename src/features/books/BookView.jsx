import Header from "../../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./bookSlice";
import { Link } from "react-router-dom";
import BookList from "./BookList";

const BookView = () => {
  const dispatch = useDispatch();

  const { books, status, error } = useSelector((state) => state.book);

  // console.log(books);
  // console.log(status);
  // console.log(error);
  useEffect(() => {
    console.log("Before Dispatch fetchBooks");
    dispatch(fetchBooks());
    console.log("After Dispatch fetchBooks");
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="p-3">
        <h1>Book View </h1>
        {status === "Loading" && <p>Loading... </p>}
        {error && <p>{error}</p>}
        <Link to="/addBook"> Add a book</Link>
        <BookList books={books} />
      </div>
    </div>
  );
};

export default BookView;
