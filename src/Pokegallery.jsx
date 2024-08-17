import React from "react";
import Pokemon from "./Pokemon";

function Pokegallery() {
  const pokemons = [
    {
      name: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      types: ["Grass", "Poison"],
    },
    {
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      types: ["Fire"],
    },
    {
      name: "Squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      types: ["Water"],
    },
    {
      name: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      types: ["Electric"],
    },
    {
      name: "Jigglypuff",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      types: ["Normal", "Fairy"],
    },
    {
      name: "Meowth",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      types: ["Normal"],
    },
    {
      name: "Psyduck",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
      types: ["Water"],
    },
    {
      name: "Machop",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
      types: ["Fighting"],
    },
    {
      name: "Geodude",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
      types: ["Rock", "Ground"],
    },
    {
      name: "Eevee",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      types: ["Normal"],
    },
    {
      name: "Snorlax",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
      types: ["Normal"],
    },
    {
      name: "Mewtwo",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      types: ["Psychic"],
    },
  ];
  return (
    <div style={styles.pokegallery}>
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

const styles = {
    pokegallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    }
};

export default Pokegallery;
