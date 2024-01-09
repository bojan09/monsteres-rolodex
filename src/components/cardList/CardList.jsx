import React, { Component } from "react";

// styling
import "./CardList.css";

import { Card } from "../";

class CardList extends Component {
  render() {
    console.log("render cardList");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} key={monster.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
