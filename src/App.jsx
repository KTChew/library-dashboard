import { useState, useEffect  } from "react";
import BookFilters from "./components/BookFilters";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {

  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin", status: "Available" },
    { id: 2, title: "Domain-Driven Design", author: "Eric Evans", status: "Borrowed" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt", status: "Available" }
  ]);


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

              {/* Main Content */}
              <div className="container">
                <h1>📚 Library Dashboard</h1>

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
