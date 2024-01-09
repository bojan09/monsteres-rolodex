import "./App.css";

import React, { useState } from "react";

// components
import { CardList, SearchBar } from "./components";

const App = () => {
  console.log("Render");
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  console.log(searchField);

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) =>
  //       this.setState(() => {
  //         return { monsters: users };
  //       })
  //     );
  // }

  // render() {
  //   const { monsters, searchField } = this.state;
  //   const { onSearchChange } = this;

  //   const filteredMonsters = monsters.filter((monster) => {
  //     return monster.name.toLowerCase().includes(searchField);
  //   });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="search-box"
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

export default App;
