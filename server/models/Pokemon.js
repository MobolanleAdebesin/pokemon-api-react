const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// statSchema = new Schema({
//   type: [
//     {
//       name: String,
//       url: String
//     }
//   ],
//   abilities: [
//     {
//       name: String,
//       url: String
//     }
//   ],
//   stats: [
//     {
//       base_stat: Number,
//       effort: Number,
//       stat: {
//         name: String,
//         url: String
//       }
//     }
//   ]
// });

pokemonSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
  pokeId: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    trim: true
  },
  stats: {}
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
