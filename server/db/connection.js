const mongoose = require("mongoose");

let mongoURI = "";
process.env.NODE_ENV === "production"
  ? (mongoURI = process.env.DB_URL)
  : (mongoURI = "mongodb://localhost/pokemon");

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .catch(e => console.log("Connection Error", e.message));

module.exports = mongoose;
