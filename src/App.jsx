import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [monsters, setMonsters] = useState([
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
  ]);

  return (
    <div>
      {monsters.map((monster) => (
        <p key={monster.id}>{monster.name}</p>
      ))}
    </div>
  );
};

export default App;
