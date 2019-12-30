import React, { Component } from "react";
import "./PokemonList.css";
import { Link } from "react-router-dom";

class PokemonList extends Component {
  render() {
    return (
      <div className="PokemonList">
        <h1>Poke!</h1>
        <div>
          {this.props.data.map((pokemon, i) => (
            <div key={i}>
              <Link to={`/Pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PokemonList;
