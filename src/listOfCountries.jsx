import React, { useEffect, useState } from "react";
import Card from "./components/card";

const ListCountries = ({ countries, theme, searched, currentFilter }) => {
  const [countryList, setCountryList] = useState([...countries]);
  console.log(countries);
  useEffect(() => {
    setCountryList([...countries]);
  }, [countries]);
  useEffect(() => {
    const _countries = [...countries];
    if (currentFilter === "All") {
      setCountryList(_countries);
    } else {
      const newFiltered = _countries.filter(
        (country) => country.region === currentFilter
      );

      if (newFiltered.length !== 0) setCountryList(newFiltered);
    }
  }, [currentFilter, countries]);
  useEffect(() => {
    const _countries = [...countries];
    const newCountry = _countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searched)
    );

    if (newCountry.length !== 0) {
      console.log(newCountry);
      setCountryList(newCountry);
    }
  }, [searched, countries]);
  if (countryList.length > 8) countryList.splice(0, countryList.length - 8);

  return (
    <div className={theme ? "primary-light" : "primary-dark"}>
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
