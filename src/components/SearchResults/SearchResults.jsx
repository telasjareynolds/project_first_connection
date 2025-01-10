import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchData } from "../../utils/searchData";
import "./SearchResults.css";

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (query) {
      const results = searchData.filter(
        (item) =>
          item.location.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query]);

  function handleResultClick(path) {
    navigate(path);
  }

  return (
    <div>
      <h1>Search Results for: "{query}"</h1>
      {filteredResults.length > 0 ? (
        <div className="search-results">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="search-results__card"
              onClick={() => handleResultClick(item.path)}
            >
              <h2 className="search-results__title">{item.location}</h2>
              <p className="search-results__content ">{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="search-results__no-results">No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
