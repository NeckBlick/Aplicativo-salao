const express = require("express");
const router = express.Router();

// Model
const Agendamento = require("../model/agendamentoModel");

// Buscar todos os agendamentos
router.get("/", async (req, res) => {
  try {
    const agendamentos = await Agendamento.find()
      .populate({ path: "clienteId", select: "nome email" })
      .populate({ path: "colaboradorId", select: "nome telefone email sexo foto" })
      .populate({ path: "servicoId", select: "nome titulo valor descricao" })
      .exec();
    res.status(200).json(agendamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Buscar um agendamento
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const agendamento = await Agendamento.findById(id)
            .populate({ path: "clienteId", select: "nome email" })
            .populate({ path: "colaboradorId", select: "nome telefone email sexo foto" })
            .populate({ path: "servicoId", select: "nome titulo valor descricao" })
            .exec();
        res.status(200).json(agendamento);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
