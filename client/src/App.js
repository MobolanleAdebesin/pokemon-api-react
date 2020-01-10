import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import pokemonData from "./pokemonData";
import PokemonList from "./PokemonList";
import Home from "./Home";
import About from "./About";
import PokemonPage from "./PokemonPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemonData
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/* The navigation bar is being rendered outside of the routes so that it appears on every route/page */}
          <nav>
            <Link to="/">Pokemon</Link>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
          </nav>
          {/* Defined routes */}
          <Switch>
            {/* This route leads to a 'detail' page about each pokemon. When the link is clicked the pokemon's id number is used to pull data from the pokemon API and a pokemon image API */}
            <Route
              path="/Pokemon/:id"
              render={routerProps => (
                <PokemonPage {...routerProps} {...this.state} />
              )}
            />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            {/* This route leads to the pokemon list. The information about all 150 information is passed  from the App state to the PokemonList component as routerProps */}
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
