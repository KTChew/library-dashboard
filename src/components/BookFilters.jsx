export default function BookFilters({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <button
        style={{
            marginRight: "10px",
            padding: "8px 12px",
            cursor: "pointer"
        }}
        onClick={() => setFilter("ALL")}
        >
        All
    </button>
      <button style={{
            marginRight: "10px",
            padding: "8px 12px",
            cursor: "pointer"
        }} onClick={() => setFilter("AVAILABLE")}>Available</button>
      <button style={{
            marginRight: "10px",
            padding: "8px 12px",
            cursor: "pointer"
        }} onClick={() => setFilter("BORROWED")}>Borrowed</button>
    </div>
  );
}