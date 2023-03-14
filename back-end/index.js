require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Configurações
app.use(express.json());
app.use(cors());

// Rotas
const salaoRouter = require("./src/routes/salao.routes");
const clienteRouter = require("./src/routes/cliente.routes");

app.use("/salao", salaoRouter);
app.use("/clientes", clienteRouter);


// Iniciar o servidor
app.listen(process.env.PORT || 8080, () => {    
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log('Running...');
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
});