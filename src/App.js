import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookView from "./features/books/BookView";
import BookForm from "./features/books/BookForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookView />} />
        <Route path="/addBook" element={<BookForm />} />
      </Routes>
    </Router>
  );
}
