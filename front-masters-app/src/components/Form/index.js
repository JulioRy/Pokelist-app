import React, { useState } from "react";

import "./form.css";

const Form = (props) => {
  const [enteredPokemonName, setEnteredPokemonName] = useState("");
  const [enteredPokemonImage, setEnteredPokemonImage] = useState("");
  const [enteredPokemonType, setEnteredPokemonType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const pokemonNameChangeHandler = (event) => {
    setEnteredPokemonName(event.target.value);
  };

  const pokemonTypeChangeHandler = (event) => {
    setEnteredPokemonType(event.target.value);
  };

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEnteredPokemonImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newPokemon = {
      nome: enteredPokemonName,
      type: enteredPokemonType,
      image: enteredPokemonImage,
    };

    props.addNewPokemon(newPokemon);

    setEnteredPokemonName("");
    setEnteredPokemonType("");
    setEnteredPokemonImage("");
    setSelectedImage(null);
  };

  return (
    <div className="new-form">
      <form onSubmit={submitHandler}>
        <div className="new-form-controls">
          <label>Name of the Pokemon </label>
          <input
            type="text"
            value={enteredPokemonName}
            onChange={pokemonNameChangeHandler}
          />
        </div>

        <div>
          <label>Image of the Pokemon </label>
          <input type="file" accept="image/*" onChange={imageChangeHandler} />
          {selectedImage && (
            <img
              src={enteredPokemonImage}
              alt="Selected Pokemon"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          )}
        </div>

        <div>
          <label>Type of the Pokemon </label>
          <input
            type="text"
            value={enteredPokemonType}
            onChange={pokemonTypeChangeHandler}
          />
        </div>

        <button>Insert Pokemon</button>
      </form>
    </div>
  );
};

export default Form;
