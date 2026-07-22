import { useState, useEffect } from "react";
import { addBook, updateBook } from "../services/bookService";

export default function BookForm({ books, setBooks, editBook, setEditBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {

      if(editBook)
      {
          setTitle(editBook.title);
          setAuthor(editBook.author);
      }

  }, [editBook]);


  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
            marginRight: "10px",
            padding: "8px"
        }}
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
            marginRight: "10px",
            padding: "8px"
        }}
      />

      <button
       onClick={async () => {

    if (!title || !author) return;


    if (editBook) {

        const updatedBook = await updateBook({
            id: editBook.id,
            title,
            author,
            status: editBook.status
        });


        setBooks(
            books.map((book) =>
                book.id === updatedBook.id
                    ? updatedBook
                    : book
            )
        );


        setEditBook(null);

    } 
    else {

        const newBook = {
            title,
            author,
            status: "Available"
        };


        const savedBook = await addBook(newBook);


        setBooks([
            ...books,
            savedBook
        ]);
    }


    setTitle("");
    setAuthor("");

}}
      >
        {editBook ? "Update Book" : "Add Book"}
      </button>
    </div>
  );
}