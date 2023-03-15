const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const upload = require("../middlewares/upload");

const Colaborador = require("../model/colaboradorModel");

// Buscar todos os colaboradores
router.get("/", async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Buscar um colaborador
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const colaborador = await Colaborador.findById(id);
    res.status(200).json(colaborador);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Buscar um colaborador pelo status
router.get("/status/:status", async (req, res) => {
  const { status } = req.params;

  try {
    const colaboradores = await Colaborador.find({ status: status });
    res.status(200).json(colaboradores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Criar um colaborador
router.post("/", upload.single("foto"), async (req, res) => {
  const { nome, telefone, email, senha, sexo } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "O nome é obrigatório" });
  }

  if (!telefone) {
    return res.status(400).json({ message: "O telefone é obrigatório" });
  }

  if (!email) {
    return res.status(400).json({ message: "O email é obrigatório" });
  }

  if (!senha) {
    return res.status(400).json({ message: "A senha é obrigatório" });
  }

  if (!sexo) {
    return res.status(400).json({ message: "O sexo é obrigatório" });
  }

  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({ message: "A foto é obrigatório" });
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    bcrypt.hash(senha, salt, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      const colaborador = new Colaborador({
        nome: nome,
        email: email,
        telefone: telefone,
        senha: hash,
        sexo: sexo,
        foto: req.file.path,
      });

      try {
        const novoColaborador = await colaborador.save();

        res.status(201).json({
          colaborador: novoColaborador,
          message: "Colaborador criado com sucesso!",
        });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
  });
});

// Login de um calaborador
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const colaboradorExiste = await Colaborador.findOne({
    email: email,
  });

  if (!colaboradorExiste) {
    return res.status(404).json({ message: "E-mail ou senha inválido!" });
  }

  bcrypt.compare(senha, colaboradorExiste.senha, (err, result) => {
    if (err) {
      return res.status(401).json({ message: "Falha na autenticação" });
    }
    if (result) {
      return res.status(200).json({ message: "Autenticado com sucesso" });
    }
    return res.status(401).json({ message: "E-mail ou senha inválido!" });
  });
});

// Ativar colaborador
router.patch("/ativar/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const novoColaborador = await Colaborador.findByIdAndUpdate(id, {
      status: "ativo",
    });

    res.status(201).json({
      message: "Colaborador ativado com sucesso!",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Desativar colaborador
router.patch("/desativar/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const novoColaborador = await Colaborador.findByIdAndUpdate(id, {
      status: "inativo",
    });

    res.status(201).json({
      message: "Colaborador desativado com sucesso!",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
