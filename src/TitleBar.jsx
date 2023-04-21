import React from "react";
const Title = ({ handleTheme, theme }) => {
  return (
    <nav
      id="nav"
      className={
        theme
          ? "navbar navbar-expand-lg secondary-light"
          : "navbar navbar-expand-lg secondary-dark"
      }
    >
      <span>Where in the world?</span>
      <span>
        <button
          id="theme-button"
          className={theme ? " secondary-light" : " secondary-dark"}
          onClick={handleTheme}
        >
          {theme ? (
            <img id="moon" src="./images/moonClear.svg" alt="moon" />
          ) : (
            <img id="moon" src="./images/moon.svg" alt="moon" />
          )}
          Dark Mode
        </button>
      </span>
    </nav>
  );
};

export default Title;
