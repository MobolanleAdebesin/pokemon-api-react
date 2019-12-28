import React, { Component } from "react";
import axios from "axios";
import "./App.css";

let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(function(res) {
        console.log(res.data.results);
        let results = res.data.results;
        return results;
      })
      .then(results => {
        this.setState({ data: results });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
