import React from "react";
import { SearchIcon } from "../../assets/icons";

import "./searchBlock.scss";

const SearchBlock = () => {
  return (
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
  );
};

export default SearchBlock;
