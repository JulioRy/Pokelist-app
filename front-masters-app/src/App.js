import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import Banner from "./components/Banner";
import PokemonInfos from "./components/PokemonInfos";
import Form from "./components/Form";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    fetch("./listpokemon.json")
      .then((response) => response.json())
      .then((data) => setListPokemon(data))
      .catch((error) => console.log(error));
  }, []);

  const addNewPokemon = (newPokemon) => {
    setListPokemon((prevListPokemon) => [...prevListPokemon, newPokemon]);
  };

  // Test of Animation library

  const [listRef] = useAutoAnimate();

  return (
    <div className="App">
      <Banner />
      <Form addNewPokemon={addNewPokemon} />
      <h1>Pokedex</h1>
      <div className="pokedex" ref={listRef}>
        {listPokemon.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.nome}
            type={pokemon.type}
            image={pokemon.image}
          />
        ))}

        {/* <PokemonInfos listPokemon={listPokemon} /> */}
      </div>
    </div>
  );
}

export default App;
