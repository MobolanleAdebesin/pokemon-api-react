const Pokemon = require("../models/Pokemon");
const axios = require("axios");

for (let i = 1; i <= 150; i++) {
  let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
  console.log(url);
  axios
    .get(url)
    .then(function(res) {
      let pokeStats = {
        type: res.data.types,
        abilities: res.data.abilities,
        stats: res.data.stats
      };
      console.log(pokeStats);
      Pokemon.findOneAndUpdate(
        { pokeId: i.toString() },
        { $set: { stats: pokeStats } },
        { new: true }
      ).then();
    })
    .catch(err => console.log(`Something is wrong... ${err}`));
}
