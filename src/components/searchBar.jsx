import React from "react";
const Search = (props) => {
  const { handleSearch, searched, theme } = props;
  return (
    <input
      className={theme ? "secondary-light" : "secondary-dark"}
      id="search-bar"
      type="text"
      placeholder={"Search for a country..."}
      value={searched}
      onChange={handleSearch}
    />
  );
};

export default Search;
