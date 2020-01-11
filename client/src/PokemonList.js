import React, { Component } from "react";
import "./PokemonList.css";
import { Link } from "react-router-dom";

class PokemonList extends Component {
  render() {
    return (
      <div className="PokemonList">
        <h1 className="PokemonList-header">Poke!</h1>
        <div className="PokemonList-card-container">
          {this.props.data.map((pokemon, i) => (
            <div key={i} className="PokemonList-card">
              <Link to={`/Pokemon/${i}`} className="PokemonList-link">
                {pokemon.name}
                <img className="PokemonList-image" src={pokemon.image} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PokemonList;
