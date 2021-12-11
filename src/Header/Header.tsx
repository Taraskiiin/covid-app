import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <a href="#">
        <img width={200} height={200} src={logo} alt="logo" />
        <span className="header_text">STATISTIC</span>
      </a>
      <label>
        <input
          type="search"
          id="site-search"
          name="q"
          aria-label="Search through site content"
          placeholder="Search..."
        ></input>
      </label>
    </header>
  );
};

export default Header;
