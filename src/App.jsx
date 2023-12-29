import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monster"
          className="search-box"
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map((monster) => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
