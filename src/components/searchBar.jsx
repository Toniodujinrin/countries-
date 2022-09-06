import React from "react";
const Search = (props) => {
  const { handleSearch, searched } = props;
  return (
    <input
      type="text"
      placeholder="Search for a country"
      value={searched}
      onChange={handleSearch}
    />
  );
};

export default Search;
