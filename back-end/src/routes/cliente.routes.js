const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Cliente = require('../model/clienteModel');

// Buscar todos os clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Buscar um cliente
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findById(id);
        res.status(200).json(cliente);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Buscar um cliente pelo status
router.get('/status/:status', async (req, res) => {
    const { status } = req.params;
    try {
        const clientes = await Cliente.find({ status: status });
        res.status(200).json(clientes);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Criar um cliente
router.post('/', async (req, res) => {
    const { nome,  email, senha } = req.body;

    if(!nome){
        return res.status(400).json({ message: 'O nome é obrigatório' });
    }
    if(!email){
        return res.status(400).json({ message: 'O email é obrigatório' });
    }
    if(!senha){
        return res.status(400).json({ message: 'A senha é obrigatória' });
    }
     bcrypt.genSalt(10,  (err, salt) => {
        if(err){
            return res.status(500).json({ message: err.message });
        };
        bcrypt.hash(senha, salt, async (err, hash) => {
            if(err) {
                return res.status(500).json({ message: err.message });
            };
            
            const cliente = new Cliente({
                nome: nome,
                email: email,
                senha: hash,
            });
        
            try {
                const novoCliente = await cliente.save();
                res.status(201).json({cliente:novoCliente, message: "Cliente criado com sucesso!"});
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
        });

    });
});

// Login de um cliente
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const usuarioExiste = await Cliente.findOne({ email: email,senha: senha });
    if(!usuarioExiste){
        return res.status(404).json({ message: 'Usuário ou senha invalida' });
    }

    bcrypt.compare(senha, usuarioExiste.senha, (err, result) => {
        if(err){
            return res.status(401).json({ message: 'Falha na autenticação' });
        }
        if(result){
            return res.status(200).json({ message: 'Autenticado com sucesso' });
        }
        return res.status(401).json({ message: 'Usuário ou senha invalida' });
    })
});

// Atualizar um cliente
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const novoCliente = await Cliente.findByIdAndUpdate(id, req.body);
        res.status(201).json({cliente:novoCliente, message: "Cliente atualizado com sucesso!"});
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Atualizar o status de um cliente
router.patch('/status/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const novoCliente = await Cliente.findByIdAndUpdate(id, {status: 'inativo'});
        res.status(201).json({cliente:novoCliente, message: "Cliente atualizado com sucesso!"});
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;