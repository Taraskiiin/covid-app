import React from "react";

import logo from "../../assets/logo.png";
import SearchBlock from "../SearchBlock/SearchBlock";

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
          <SearchBlock />
        </div>
      </div>
    </header>
  );
};

export default Header;
