const mongoose = require("mongoose");

let mongoURI = "";
process.env.NODE_ENV === "production"
  ? (mongoURI = process.env.DB_URL)
  : (mongoURI = "mongodb://localhost/pokemon");

mongoose.connect(mongoURI, {
  useNewUrlParser: true
});

module.exports = mongoose;
