import "./App.css";

import React, { Component } from "react";

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
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monster"
          className="search-box"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
