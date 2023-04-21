import React, { Component } from "react";
class Filter extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div>
        <select
          className={theme ? "secondary-light" : "secondary-dark"}
          onChange={(e) => {
            this.props.setFilter(e.currentTarget.value);
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
