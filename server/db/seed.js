const axios = require("axios").default;
const Pokemon = require("../models/Pokemon");
let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

axios
  .get(url)
  .then(function(res) {
    const PokemonMap = res.data.results.map(item => {
      let urlLength = item.url.length;
      let url = item.url;
      let name = item.name;
      const pokemon = {};
      pokemon.name = name;
      pokemon.url = url;

      //This set of conditionals is to get the id number from the url of each pokemon
      //Because the id number can range from 1 to 3 digits, the length of the url can be used
      //to determine the number of digits in the pokemon id number

      if (urlLength <= 36) {
        pokemon.pokeId = url[urlLength - 2];
      } else if (urlLength == 37) {
        pokemon.pokeId = url[urlLength - 3] + url[urlLength - 2];
      } else {
        pokemon.pokeId =
          url[urlLength - 4] + url[urlLength - 3] + url[urlLength - 2];
      }
      pokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokeId}.png`;
      return pokemon;
    });
    Pokemon.remove({}).then(() => {
      Pokemon.create(PokemonMap).then(() => {
        process.exit();
      });
    });
  })
  .catch(function(err) {
    console.log("Something is wrong " + err);
  });
