import React from "react";
import { useState } from "react";
const Search = ({ setSearched, searched }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        //className={theme ? "secondary-light" : "secondary-dark"}
        id="search-bar"
        type="text"
        placeholder={"Search for a country..."}
        value={searched}
        onChange={(e) => {
          setSearched(e.currentTarget.value);
          setValue(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          setSearched(value);
        }}
      >
        Search
      </button>
      <p>{value}</p>
    </div>
  );
};

export default Search;
