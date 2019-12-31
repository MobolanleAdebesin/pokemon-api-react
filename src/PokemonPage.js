import React, { Component } from "react";
import "./PokemonPage.css";
import axios from "axios";

class PokemonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    this.setState({ id: params.id });
  }

  getData = () => {
    axios.get("");
  };
  render() {
    if (this.props.data[this.state.id]) {
      let pokemon = this.props.data[this.state.id];
      console.log(pokemon.name);
      return (
        <div>
          <h3>{pokemon.name}</h3>
        </div>
      );
    }

    return (
      <div>
        <h1>Poke!</h1>
        <h3>...Loading</h3>
      </div>
    );
  }
}
export default PokemonPage;
