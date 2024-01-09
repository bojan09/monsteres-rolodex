import "./CardList.css";
import React from "react";

// components
import { Card } from "../";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
