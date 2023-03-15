const express = require("express");
const router = express.Router();

const Horario = require("../model/horarioModel");
const Salao = require("../model/salaoModel")

// Busca todos os horários
router.get("/", async (req, res) => {
  const filters = req.query;

  console.log(filters);

  try {
    let horarios;

    console.log(Object.keys(filters))
    if (Object.keys(filters).length > 0) {
      horarios = await Horario.find(filters);
    } else {
      horarios = await Horario.find();
    }

    res.status(200).json(horarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const horario = await Horario.findById(id);

    res.status(200).json(horario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { salaoId, diaSemana, horas } = req.body;

  console.log(salaoId)

  if (!salaoId) {
    return res.status(400).json({ message: "O ID do salão é obrigatório" });
  }

  if (!diaSemana) {
    return res.status(400).json({ message: "O dia da semana é obrigatório" });
  }

  if (!horas) {
    return res.status(400).json({ message: "As horas são obrigatórias" });
  }

  const horario = new Horario({
    salaoId: salaoId,
    diaSemana: diaSemana,
    horas: horas,
  });

  try {
    const novoHorario = await horario.save();

    res.status(201).json({
      horario: novoHorario,
      message: "Horário criado com sucesso!",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
