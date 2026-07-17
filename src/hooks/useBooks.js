import { useState, useEffect } from "react";
import { getBooks} from "../services/bookService";


export default function useBooks() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            try {
                const data = await getBooks();
                setBooks(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadBooks();
    }, []);

  return {
    books,
    setBooks
  };
}