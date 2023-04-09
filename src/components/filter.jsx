import React, { Component } from "react";
class Filter extends Component {
  state = {};

  render() {
    const { value, setValue } = this.props;

    return (
      <div>
        <select
          value={value}
          className={theme ? "secondary-light" : "secondary-dark"}
          onSelect={(e) => {
            e.currentTarget.value;
          }}
        >
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
  }
}

export default Filter;
