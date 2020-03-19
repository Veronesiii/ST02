const express = require("express");
const app = express();
const petRotas = require("./routes/pet");

app.use(petRotas);

app.listen(3000, () => {
  console.log("Carnavrau!");
});
