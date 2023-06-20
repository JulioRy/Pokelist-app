import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Banner from "./components/Banner";
import PokemonInfos from "./components/PokemonInfos";
import Form from "./components/Form";

function App() {
  const [listPokemon, setListPokemon] = useState([
    {
      nome: "Arcanine",
      type: "Fire",
      image: "/images/arcanine.png",
    },
    {
      nome: "Beedrill",
      type: "Bug",
      image: "/images/beedrill.png",
    },
    {
      nome: "Blastoise",
      type: "Water",
      image: "/images/blastoise.png",
    },
    {
      nome: "Butterfree",
      type: "Bug",
      image: "/images/butterfree.png",
    },
    {
      nome: "Caterpie",
      type: "Bug",
      image: "/images/caterpie.png",
    },
    {
      nome: "Charizard",
      type: "Fire",
      image: "/images/charizard.png",
    },
    {
      nome: "Charmander",
      type: "Fire",
      image: "/images/charmander.png",
    },
    {
      nome: "Charmeleon",
      type: "Fire",
      image: "/images/charmeleon.png",
    },
    {
      nome: "Clefable",
      type: "Normal",
      image: "/images/clefable.png",
    },
    {
      nome: "Bulbasaur",
      type: "Grass",
      image: "/images/bulbasaur.png",
    },
    {
      nome: "Dewgong",
      type: "Water",
      image: "/images/dewgong.png",
    },
    {
      nome: "Farfetchd",
      type: "Flying",
      image: "/images/farfetchd.png",
    },
    {
      nome: "Golbat",
      type: "Poison",
      image: "/images/golbat.png",
    },
    {
      nome: "Ivysaur",
      type: "Grass",
      image: "/images/ivysaur.png",
    },
    {
      nome: "Kakuna",
      type: "Bug",
      image: "/images/kakuna.png",
    },
    {
      nome: "Metapod",
      type: "Bug",
      image: "/images/metapod.png",
    },
    {
      nome: "Pidgeot",
      type: "Flying",
      image: "/images/pidgeot.png",
    },
    {
      nome: "Pidgeotto",
      type: "Flying",
      image: "/images/pidgeotto.png",
    },
    {
      nome: "Pidgey",
      type: "Flying",
      image: "/images/pidgey.png",
    },
    {
      nome: "Pikachu",
      type: "Electric",
      image: "/images/pikachu.png",
    },
    {
      nome: "Ponyta",
      type: "Fire",
      image: "/images/ponyta.png",
    },
    {
      nome: "Raichu",
      type: "Electric",
      image: "/images/raichu.png",
    },
    {
      nome: "Raticate",
      type: "Normal",
      image: "/images/raticate.png",
    },
    {
      nome: "Rattata",
      type: "Normal",
      image: "/images/rattata.png",
    },
    {
      nome: "Squirtle",
      type: "Water",
      image: "/images/squirtle.png",
    },
    {
      nome: "Venusaur",
      type: "Grass",
      image: "/images/venusaur.png",
    },
    {
      nome: "Vulpix",
      type: "Fire",
      image: "/images/vulpix.png",
    },
    {
      nome: "Wartortle",
      type: "Water",
      image: "/images/wartortle.png",
    },
    {
      nome: "Weedle",
      type: "Bug",
      image: "/images/weedle.png",
    },
  ]);

  const addNewPokemon = (newPokemon) => {
    setListPokemon((prevListPokemon) => [...prevListPokemon, newPokemon]);
  };

  return (
    <div className="App">
      <Banner />
      <Form addNewPokemon={addNewPokemon} />
      <h1>Pokedex</h1>
      <div className="pokedex">
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
