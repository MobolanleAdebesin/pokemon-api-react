import React, { Component } from "react";
import "./PokemonPage.css";

class PokemonPage extends Component {
  render() {
    console.log(this.props.data);
    const { params } = this.props.match;
    console.log(params);
    return (
      <div>
        <h3>{params.id}</h3>
        {this.props.data.map((pokemon, i) => {
          if (params.id === pokemon.name) {
            return (
              <img
                className="PokemonPage-image"
                key={i}
                src={`https://pokeres.bastionbot.org/images/pokemon/${i +
                  1}.png`}
                alt=""
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
export default PokemonPage;
