import React from "react";
const Filter = ({ handleSubmit, handleChange, currentFilter }) => {
  return (
    <div>
      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
};

export default Filter;
