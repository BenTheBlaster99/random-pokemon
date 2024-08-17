import React from "react";

function Pokemon({ name, image, types }) {
  return (
    <div style={styles.pokemonCard}>
      <img src={image} alt={name} style={styles.pokemonImage} />
      <h3>{name}</h3>
      <p>{types.join(", ")}</p>
    </div>
  );
}

const styles = {
  pokemonCard: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    width: "150px",
  },
  pokemonImage: {
    width: "100px",
    height: "100px",
  },
};

export default Pokemon;
