const express = require("express")
const router = express.Router()
const upload = require("../middlewares/upload");
const fs = require("fs");

//Model serviço
const Servico = require("../model/servicoModel")

//buscar todos os servicos
router.get("/", async (req, res) => {
    try {
        const servico = await Servico.find()
        res.status(200).json(servico)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//buscar um único serviço
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const unicoServico = await Servico.findById(id)
        res.status(200).json(unicoServico)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//buscar um serviço pelo status
router.get("/status/:status", async (req, res) => {
    const { status } = req.params

    try {
        const statusServico = await Servico.find({ status: status })
        res.status(200).json(statusServico);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


//cadastrar um serviço
router.post("/cadastro", upload.single("foto"), async (req, res) => {
    const { titulo, preco, duracao, descricao } = req.body
    if (!titulo) {
        return res.status(400).json({ message: 'O titulo é obrigatório' });
    }
    if (!preco) {
        return res.status(400).json({ message: 'O preço é obrigatório' });
    }
    if (!duracao) {
        return res.status(400).json({ message: 'A duração é obrigatória' });
    }
    if (!descricao) {
        return res.status(400).json({ message: 'A descrição é obrigatória' });
    }
    if (!req.file) {
        return res.status(400).json({ message: "A foto é obrigatório" });
    }

    try {
        const servico = new Servico({
            titulo: titulo,
            preco: preco,
            duracao: duracao,
            descricao: descricao,
            foto: req.file.path,
        })
        const novoServico = await servico.save()
        res.status(201).json({ servico: novoServico, message: "Serviço criado com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//desativar um serviço
router.put("/desativar/:id", async (req, res) => {
    const { id } = req.params

    try {
        const getServico = await Servico.findById(id)
        console.log(getServico)
        if (getServico.status == 'inativo') {
            res.status(500).json({ message: "O serviço já está inativo" })
        } else {
            const desativar = await Servico.findByIdAndUpdate(id, { status: 'inativo' })
            res.status(201).json({ cliente: desativar, message: "Serviço atualizado com sucesso!" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//ativar um serviço
router.put("/ativar/:id", async (req, res) => {
    const { id } = req.params

    try {
        const getServico = await Servico.findById(id)
        console.log(getServico)
        if (getServico.status == 'ativo') {
            res.status(500).json({ message: "O serviço já está ativo" })
        } else {
            const desativar = await Servico.findByIdAndUpdate(id, { status: 'ativo' })
            res.status(201).json({ cliente: desativar, message: "Serviço atualizado com sucesso!" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//editar um serviço
router.put("/editar/:id", upload.single("foto"), async (req, res) => {
    const { id } = req.params
    const { titulo, preco, duracao, descricao } = req.body

    if (!titulo) {
        return res.status(400).json({ message: 'O titulo é obrigatório' });
    }
    if (!preco) {
        return res.status(400).json({ message: 'O preço é obrigatório' });
    }
    if (!duracao) {
        return res.status(400).json({ message: 'A duração é obrigatória' });
    }
    if (!descricao) {
        return res.status(400).json({ message: 'A descrição é obrigatória' });
    }
    if (!req.file) {
        return res.status(400).json({ message: "A foto é obrigatório" });
    }

    try {
        const getFoto = await Servico.findById(id)
        // console.log(getFoto.foto)
        console.log(getFoto)
        fs.unlinkSync(getFoto.foto)
        if (getFoto) {
            const servico = new Servico({
                titulo: titulo,
                preco: preco,
                duracao: duracao,
                descricao: descricao,
                foto: req.file.path,
            })
            const novoServico = await Servico.findByIdAndUpdate(id, { 
                titulo: servico.titulo, 
                preco: servico.preco, 
                duracao: servico.duracao, 
                descricao: servico.descricao, 
                foto: servico.foto})
            res.status(201).json({ servico: novoServico, message: "Serviço editado com sucesso!" });
        } else {
            res.status(500).json({ message: "O serviço não existe" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
module.exports = router