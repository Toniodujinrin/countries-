import React from "react";
import { utils } from "../functions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CountryDetails = (props) => {
  const {
    flag,
    currencies,
    languages,
    borders,
    tLD,
    population,
    commonName,
    region,
    subregion,
    capital,
  } = props;

  const navigate = useNavigate();

  return (
    <div id="details-page">
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div id="details">
        <div id="flag-container">
          <img id="flag" src={flag} alt="" />
        </div>
        <div id="information">
          <div id="country-Name">{commonName}</div>
          <div id="data">
            <div>
              <div className="fact">
                <span className="fact-header">{"Native Name:"}</span>
                <span>{` ${commonName}`}</span>
              </div>
              <div className="fact">
                <span className="fact-header">{`Population:`}</span>
                <span>{` ${population}`}</span>
              </div>
              <div className="fact">
                <span className="fact-header">{`Region:`}</span>
                <span>{` ${region}`}</span>
              </div>
              <div className="fact">
                <span className="fact-header">{`Sub-Region:`}</span>
                <span>{` ${subregion}`}</span>
              </div>
              <div className="fact">
                <span className="fact-header">{`Capital:`}</span>
                <span>{` ${capital}`}</span>
              </div>
            </div>
            <div>
              <div className="fact">
                <span className="fact-header">{`Top Level Domain:`}</span>
                <span>{` ${tLD}`}</span>
              </div>
              <div className="fact">
                <span className="fact-header">{`Currencies: `}</span>
                <span>{`  ${currencies}`}</span>
              </div>
              <div className="fact">
                <span className="fact-header">{`Languages:  `}</span>
                <span>{` ${languages} `}</span>
              </div>
            </div>
          </div>
          <div id="border">
            <div>Border Land:</div>

            <div>
              {borders ? (
                <ul id="border-list">
                  {borders.map((borderCountry) => (
                    <Link id="link" to={`/details/${borderCountry}`}>
                      <li key={borderCountry} id="border-country">
                        {borderCountry}
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
