const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const horarioSchema = new Schema({
  salaoId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Salao",
      required: true,
    },
  ],
  diaSemana: {
    type: String,
    required: true,
  },
  horas: [String],
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Horario", horarioSchema);
