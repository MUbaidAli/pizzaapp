function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        className="search"
        value={search}
        onChange={handleChange}
        placeholder="Seach Delicious Food Here..."
      />
    </div>
  );
}

export default Search;
