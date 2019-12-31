import React, { Component } from "react";
import "./PokemonPage.css";
import axios from "axios";

class PokemonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pokemonData: {}
    };
  }
  //When the page loads, save the params.id into state so that number can be accessed throughout the component.
  componentDidMount() {
    const { params } = this.props.match;
    this.setState({ id: params.id });
  }
  // When the user clicks the button element, this function is called. It fetches data from the pokemon API at the endpoint specific to the pokemon in this detail page
  getData = () => {
    let pokeIndex = parseInt(this.state.id) + 1;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ pokemonData: res.data });
      })
      .catch(err => {
        console.log("There was an error " + err);
      });
  };
  render() {
    // Uses the id saved in state to identify the selected pokemon in the props array (which contains all 150 pokemon)
    //That pokemon's information is then used to populate the page.
    if (this.props.data[this.state.id]) {
      let pokemon = this.props.data[this.state.id];
      let imageIndex = parseInt(this.state.id) + 1;
      if (this.state.pokemonData.types) {
        return (
          <div className="PokemonPage">
            <h3>{pokemon.name}</h3>
            <img
              className="PokemonPage-image"
              src={`https://pokeres.bastionbot.org/images/pokemon/${imageIndex}.png`}
              alt={pokemon.name}
            />
            <button onClick={this.getData}>{pokemon.name}</button>
            <div>
              <h3>Stats</h3>
              <h5>Type</h5>
              <ul>
                {this.state.pokemonData.types.map((type, i) => {
                  return <li key={i}>{type.type.name}</li>;
                })}
              </ul>
              <h5>Abilities</h5>
              <ul>
                {this.state.pokemonData.abilities.map((ability, i) => {
                  return <li key={i}>{ability.ability.name}</li>;
                })}
              </ul>
              <h5>Stats</h5>
              <ul>
                {this.state.pokemonData.stats.map((stat, i) => {
                  return (
                    <li key={i}>{`${stat.stat.name}: ${stat.base_stat}`}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }
      return (
        <div className="PokemonPage">
          <h3>{pokemon.name}</h3>
          <img
            className="PokemonPage-image"
            src={`https://pokeres.bastionbot.org/images/pokemon/${imageIndex}.png`}
            alt={pokemon.name}
          />
          <button onClick={this.getData}>{pokemon.name}</button>
        </div>
      );
    }
    //If the state has not updated yet then this "...Loading" element will be rendered to avoid an error.
    return (
      <div>
        <h1>Poke!</h1>
        <h3>...Loading</h3>
      </div>
    );
  }
}
export default PokemonPage;
