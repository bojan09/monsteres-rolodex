import "./searchBar.css";
import React from "react";

const SearchBar = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBar;
