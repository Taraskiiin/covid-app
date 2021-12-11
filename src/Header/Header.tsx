import React from "react";

import logo from "../assets/logo.png";
import { SearchIcon } from "../assets/icons";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-block">
          <a href="#" className="header-link">
            <img width={200} height={200} src={logo} alt="logo" />
            <span className="link_text">STATISTIC</span>
          </a>
          <label className="search-label">
            <input
              className="search-input"
              type="search"
              id="site-search"
              name="q"
              aria-label="Search through site content"
              placeholder="Search..."
            />
            <SearchIcon />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
