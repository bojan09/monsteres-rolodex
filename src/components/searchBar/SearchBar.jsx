import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
