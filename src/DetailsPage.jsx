import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";

const Details = ({ theme }) => {
  const params = useParams();
  const name = params.id;
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function getCountry(Type, Name, url) {
      const { data } = await axios.get(`${url}${Name}`);
      Type(data[0]);
    }

    try {
      if (name.length > 3)
        getCountry(setCountry, name, "https://restcountries.com/v3.1/name/");
      else
        getCountry(setCountry, name, "https://restcountries.com/v3.1/alpha/");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        window.alert("country not found");
      } else {
        window.alert("check connection");
        console.log(error);
      }
    }
  }, [name]);

  function getLanguages(object) {
    let array = [];
    for (let keys in object) {
      let key = object[keys];
      array.push(key);
    }

    return array.toString();
  }
  function getCurrencies(object) {
    return object[Object.keys(object)[0]].name;
  }

  return (
    <div className={theme ? "primary-light" : "primary-dark"}>
      {country ? (
        <CountryDetails
          flag={country.flags.svg}
          commonName={country.name.common}
          population={country.population}
          region={country.region}
          subregion={country.subregion}
          capital={country.capital ? country.capital[0] : "none"}
          tLD={country.tld ? country.tld[0] : "none"}
          currencies={
            country.currencies ? getCurrencies(country.currencies) : "none"
          }
          languages={
            country.languages ? getLanguages(country.languages) : "none"
          }
          borders={country.borders}
        />
      ) : (
        <div id="loader">
          <div className="dots-3"></div>
        </div>
      )}
    </div>
  );
};

export default Details;
