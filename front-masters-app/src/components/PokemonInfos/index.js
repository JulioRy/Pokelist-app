import PokemonCard from "../PokemonCard";

function PokemonInfos(props) {
  return (
    <div>
      <PokemonCard
        name={props.listPokemon[0].nome}
        type={props.listPokemon[0].type}
        image={props.listPokemon[0].image}
      />
    </div>

    // {listPokemon.map((pokemon) => (
    //     <PokemonCard
    //       name={pokemon.nome}
    //       type={pokemon.type}
    //       image={pokemon.image}
    //     />
  );
}

export default PokemonInfos;
