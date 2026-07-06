import { useState, useEffect } from "react";
import { initialBooks } from "../data/books";
import { getBooks, saveBooks } from "../services/bookService";


export default function useBooks() {

  const [books, setBooks] = useState(() =>
        getBooks(initialBooks)
    );

  useEffect(() => {
    saveBooks(books);
  }, [books]);

  return {
    books,
    setBooks
  };
}