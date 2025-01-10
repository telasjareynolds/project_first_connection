import "./SearchForm.css";
import { useState } from "react";
import searchIcon from "../../assets/search-icon.png";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    onSearch(query); // Assume `onSearch` handles navigation to another page
  }

  function clearSearch(e) {
    e.preventDefault();
    setQuery("");
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Search..."
        value={query}
        onChange={handleSearchChange}
      />
      {query && (
        <button
          onClick={clearSearch}
          type="button"
          className="search-form__reset-btn"
        >
          X
        </button>
      )}

      <button className="search-form__btn" type="submit">
        <img
          src={searchIcon}
          alt="Search form search icon"
          className="search-form__icon"
        />
      </button>
    </form>
  );
}

export default SearchForm;