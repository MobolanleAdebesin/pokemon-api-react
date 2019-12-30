import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PokemonList from "./PokemonList";
import Home from "./Home";
import About from "./About";
import PokemonPage from "./PokemonPage";
let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(function(res) {
        // console.log(res.data.results);
        let results = res.data.results;
        return results;
      })
      .then(results => {
        this.setState({ data: results });
        let pokemonString = JSON.stringify(results);
        localStorage.setItem("Pokemon", pokemonString);
      })
      .catch(err => {
        console.log("There was an error " + err);
      });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/">Pokemon</Link>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
          </nav>
          <Switch>
            <Route
              path="/Pokemon/:id"
              render={routerProps => (
                <PokemonPage {...routerProps} {...this.state} />
              )}
            />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route
              path="/"
              render={routerProps => (
                <PokemonList {...routerProps} {...this.state} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
