import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "John", company: "Google" });

  const changeuser = () => {
    setUser({ name: "Bravo", company: "Apple" });
  };

  return (
    <div>
      <p>
        Hi, I'm {user.name} and I work for {user.company}
      </p>
      <button onClick={changeuser} type="submit">
        Change user
      </button>
    </div>
  );
};

export default App;
