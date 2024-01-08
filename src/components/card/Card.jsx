import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { monster } = this.props;
    const { id, name, email } = monster;

    return (
      <div>
        <div className="card-container" key={id}>
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={`monster ${name}`}
          />
          <h2 className="card-list__heading">{name}</h2>
          <p className="card-list__paragraph">{email}</p>
        </div>
        );
      </div>
    );
  }
}
