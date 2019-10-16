import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Pokecard = ({ id, name }) => {
  return (
    <div className=" pokemons tc bg-light-blue dib br2 pa1 ma2 grow shadow-1">
      <Link to={`${id}`}>
        <div>
          <img
            className=""
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt=""
            width="160px"
            height="160px"
          />
        </div>
        <br />
        <div className=" pokenames tc bg-light-blue dib br2 pa1 ma2 shadow-1">
          {name}
        </div>
      </Link>
    </div>
  );
};

export default Pokecard;
