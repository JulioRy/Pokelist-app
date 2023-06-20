import React, { useState } from "react";
import "./pokemoncard.css";

const PokemonCard = ({ name, type, image }) => {
  const [pokemonName, setPokemonName] = useState(name);

  const clickHandler = () => {
    setPokemonName("Updated!");
    console.log(pokemonName);
  };

  return (
    <div onClick={clickHandler} className="pokemon-card">
      <div className="pokemon-image">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon-info">
        <h2>{pokemonName}</h2>
        <p>Type: {type}</p>
        <button onClick={clickHandler}>See Details</button>
      </div>
    </div>
  );
};

export default PokemonCard;
