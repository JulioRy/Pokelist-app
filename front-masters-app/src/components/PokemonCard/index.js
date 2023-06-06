import React from "react";
import "./pokemoncard.css";

const PokemonCard = ({ name, type, image }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon-info">
        <h2>{name}</h2>
        <p>Type: {type}</p>
      </div>
    </div>
  );
};

export default PokemonCard;