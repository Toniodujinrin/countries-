import React, { Component } from "react";
import axios from "axios";
import ListCountries from "./listOfCountries";
import Search from "./components/searchBar";
import Filter from "./components/filter";
class Home extends Component {
  state = {
    currentFilter: "Africa",
    searched: "",
    countires: [],
  };
  async componentDidMount() {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    this.setState({ countires: data });
  }
  handleSearch = ({ currentTarget: input }) => {
    this.setState({ searched: input.value });
  };

  render() {
    const { searched, currentFilter } = this.state;
    return (
      <React.Fragment>
        <Search
          theme={this.props.theme}
          searched={searched}
          handleSearch={this.handleSearch}
          currentFilter={currentFilter}
        />

        <ListCountries
          theme={this.props.theme}
          countries={this.state.countires}
          searched={searched}
          currentFilter={currentFilter}
        />
      </React.Fragment>
    );
  }
}

export default Home;
