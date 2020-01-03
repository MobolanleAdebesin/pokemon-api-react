const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

pokemonSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
