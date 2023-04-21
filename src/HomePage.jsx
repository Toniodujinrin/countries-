import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ListCountries from "./listOfCountries";
import Search from "./components/searchBar";
import Filter from "./components/filter";

const Home = (props) => {
  const [searched, setSearched] = useState("");
  const [currentFilter, setCurrentFilter] = useState("Africa");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data);
      if (data) {
        setCountries(data);
      }
    };
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { theme } = props;

  return (
    <React.Fragment>
      <Search
        theme={theme}
        searched={searched}
        setSearched={setSearched}
        currentFilter={currentFilter}
      />
      <Filter
        theme={theme}
        value={currentFilter}
        setFilter={setCurrentFilter}
      />

      <ListCountries
        theme={theme}
        countries={countries}
        searched={searched}
        currentFilter={currentFilter}
      />
    </React.Fragment>
  );
};

export default Home;
