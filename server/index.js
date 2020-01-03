const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Pokemon = require("./models/Pokemon");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Pokemon.find({}).then(pokemon => {
    res.json(pokemon);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")} !!!`);
});

// app.listen(4000, () => console.log(`Server is running on port 4000`));
