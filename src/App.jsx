import "./App.css";

import React, { Component } from "react";

// components
import { CardList, SearchBar } from "./components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monster"
          className="search-box"
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => (
          <p key={monster.id}>{monster.name}</p>
        ))} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
