import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
import "../App.css";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(pokes => setPokemons(pokes.results));
  };

  return (
    <div className="App">
      <h2>POKEDEX</h2>
      {pokemons.map((pokemon, i) => (
        <Pokecard id={i + 1} key={i} name={pokemon.name} />
      ))}
    </div>
  );
}

export default Pokelist;
