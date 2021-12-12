import React, { useState } from "react";
import { SearchIcon } from "../../assets/icons";

import { useDispatch } from "react-redux";

import "./searchBlock.scss";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const searchThis = (string: string) => {
    dispatch({
      type: "SEARCH",
      payload: string,
    });
  };
  return (
    <label className="search-label">
      <input
        className="search-input"
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
        placeholder="Search..."
        onChange={(e) => searchThis(e.target.value)}
      />
      <SearchIcon />
    </label>
  );
};

export default SearchBlock;
