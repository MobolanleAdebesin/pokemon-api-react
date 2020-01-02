const axios = require("axios").default;
const Pokemon = require("../models/Pokemon");
let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

axios.get(url).then(function(res) {
  console.log(`Success ${res.data}`);
  const PokemonMap = res.data.map(pokemon => {
    const book = {};
    book.title = item.tot;
  });
});
