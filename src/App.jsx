import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: 1,
        },
        {
          name: "Frank",
          id: 2,
        },
        {
          name: "Jackie",
          id: 3,
        },
        {
          name: "James",
          id: 4,
        },
      ],
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
        {this.state.monsters.map((monster) => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
