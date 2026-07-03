export default function BookTable({ books, onDelete, onToggle }) {
  const thStyle = {
    textAlign: "left",
    borderBottom: "2px solid #ccc",
    padding: "8px"
  };

  const tdStyle = {
    padding: "8px",
    borderBottom: "1px solid #eee"
  };

//   if (!books || books.length === 0) {
//     return (
//       <p style={{ marginTop: "20px", color: "gray" }}>No books found.</p>
//     );
//   }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={thStyle}>Title</th>
          <th style={thStyle}>Author</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Actions</th>
          <th style={thStyle}>Status Action</th>
        </tr>
      </thead>

      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
              No books found.
            </td>
          </tr>
        ) : (
          books.map((book) => (
            <tr key={book.id}>
              <td style={tdStyle}>{book.title}</td>
              <td style={tdStyle}>{book.author}</td>
              <td style={tdStyle}>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "6px",
                    color: "white",
                    backgroundColor:
                      book.status === "Available" ? "green" : "red"
                  }}
                >
                  {book.status}
                </span>
              </td>
              <td style={tdStyle}>
                <button
                  onClick={() => onDelete(book.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>

              <td style={tdStyle}>
                <button
                  onClick={() => onToggle(book.id)}   
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}