import { useState, useEffect  } from "react";
import BookFilters from "./components/BookFilters";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { initialBooks } from "./data/books";
import useBooks from "./hooks/useBooks";


function App() {

  const { books, setBooks } = useBooks();


  const [searchTerm, setSearchTerm] = useState("");

  const [filter, setFilter] = useState("ALL");

  const filteredBooks = books
  .filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "ALL" ||
      book.status.toUpperCase() === filter;

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const toggleStatus = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? {
              ...book,
              status: book.status === "Available" ? "Borrowed" : "Available"
            }
          : book
      )
    );
  };

  useEffect(() => {
    document.title = "Library Dashboard";
  }, []);

  return (
    
      <div style={{ padding: "20px" }}>
      
      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/books" style={{ marginRight: "10px" }}>Books</Link>
        <Link to="/about">About</Link>
      </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={
            <div>
              <h2>Library Dashboard</h2>

              {/* Main Content */}
              <div className="container">
                <h1 className="page-title">
                    📚 Library Dashboard
                </h1>

                <BookFilters filter={filter} setFilter={setFilter} />

                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-box"
                />


                <p>Book List</p>

                <BookForm books={books} setBooks={setBooks} />

                <BookTable books={filteredBooks} onDelete={handleDelete} onToggle={toggleStatus} />

              </div>
            </div>
          } />
        </Routes>

      </div>

  );
}

export default App;