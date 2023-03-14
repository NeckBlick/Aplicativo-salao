const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Configurações
app.use(express.json());
app.use(cors());
app.use(morgan());

mongoose
  .connect(process.env.CONN_BANCO)
  .then(app.listen(process.env.PORT || 8080 ,console.log("Servidor no ar e conectado ao banco...")))
  .catch((err) => console.log(err));