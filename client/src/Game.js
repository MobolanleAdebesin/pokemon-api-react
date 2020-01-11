import React, { Component } from "react";
import "./Home.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck1: [],
      deck2: []
    };
    this.shuffle = this.shuffle.bind(this);
  }
  shuffle = array => {
    var m = array.length,
      t,
      s;
    while (m) {
      s = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[s];
      array[s] = t;
    }
    return array;
  };

  distributeCards = () => {
    let p1 = this.props.data.slice(0, 5);
    let p2 = this.props.data.slice(5, 10);
    this.setState({ deck1: p1, deck2: p2 });
    console.log(p1);
    console.log(p2);
  };

  render() {
    return (
      <div>
        <h1>Game</h1>
        {this.shuffle(this.props.data).map((pokemon, i) => {
          return <h5 key={i}>{pokemon.name}</h5>;
        })}
        <button onClick={this.distributeCards}>Distribute Cards</button>
      </div>
    );
  }
}

export default Game;
