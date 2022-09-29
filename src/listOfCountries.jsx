import React, { useEffect, useState } from "react";
import Card from "./components/card";
import Filter from "./components/filter";

const ListCountries = ({ countries, theme, searched }) => {
  const [filteredCountries, setNewFiltered] = useState(countries);
  const [newCountries, setNewCountries] = useState(countries);
  const [currentFilter, setFilter] = useState("All");

  useEffect(() => {
    const newFiltered = countries.filter(
      (country) => country.region === currentFilter
    );
    if (newFiltered.length !== 0) setNewFiltered(newFiltered);
    else setNewFiltered(countries);

    const newCountry = filteredCountries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searched)
    );
    if (newCountry.length !== 0) {
      setNewCountries(newCountry);
    } else setNewCountries(filteredCountries);
  }, [currentFilter, searched]);

  let countryList = [];

  if (newCountries.length === 0) {
    countryList = [...countries];
  } else countryList = [...newCountries];

  if (countryList.length > 8) countryList.splice(0, countryList.length - 8);

  return (
    <div className={theme ? "primary-light" : "primary-dark"}>
      <div className="filterComponent">
        <Filter theme={theme} setFilter={setFilter} />
      </div>
      {countryList[0] && countryList.length > 0 ? (
        <div id="list">
          {countryList.map((country) => (
            <div key={country.name.official}>
              {
                <Card
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital ? country.capital[0] : "no capital"}
                  flag={country.flags.svg}
                  theme={theme}
                />
              }
            </div>
          ))}
        </div>
      ) : (
        <div id="loader">
          <div className="dots-3"></div>
        </div>
      )}
    </div>
  );
};

export default ListCountries;
