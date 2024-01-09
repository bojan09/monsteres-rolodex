import "./Card.css";
import React from "react";

const Card = ({ monster }) => {
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
    </div>
  );
};

export default Card;
