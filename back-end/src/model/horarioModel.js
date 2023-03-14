const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const horarioSchema = new Schema({
  servicoId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Servico",
      required: true,
    },
  ],
    colaboradorId: [
    {
        type: Schema.Types.ObjectId,
        ref: "Colaborador",
        required: true,
    }
    ],
    dias:[Number],
    inicio:{
        type: Date,
        required: true
    },
    fim:{
        type: Date,
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Horario", horarioSchema);
