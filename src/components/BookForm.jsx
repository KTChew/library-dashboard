import { useState } from "react";

export default function BookForm({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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
        onClick={() => {
          if (!title || !author) return;

          setBooks([
            ...books,
            {
              id: books.length + 1,
              title,
              author,
              status: "Available"
            }
          ]);

          setTitle("");
          setAuthor("");
        }}
      >
        Add Book
      </button>
    </div>
  );
}