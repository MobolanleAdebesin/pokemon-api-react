const axios = require("axios").default;
const Pokemon = require("../models/Pokemon");
let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

axios
  .get(url)
  .then(function(res) {
    // console.log(`Success ${res.data.results}`);
    const PokemonMap = res.data.results.map(item => {
      const pokemon = {};
      pokemon.name = item.name;
      pokemon.url = item.url;

      return pokemon;
    });
    // console.log(PokemonMap);
    Pokemon.remove({}).then(() => {
      Pokemon.create(PokemonMap).then(() => {
        process.exit();
      });
    });
  })
  .catch(function(err) {
    console.log("Something is wrong " + err);
  });
