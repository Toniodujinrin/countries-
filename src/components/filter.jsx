import React, { Component } from "react";
class Filter extends Component {
  state = {};
  setChange = ({ currentTarget: input }) => {
    this.props.setFilter(input.value);
    console.log("hey");
  };
  render() {
    const { handleSubmit, setFilter, currentFilter, theme } = this.props;

    return (
      <div>
        <select
          className={theme ? "secondary-light" : "secondary-dark"}
          onChange={this.setChange}
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
