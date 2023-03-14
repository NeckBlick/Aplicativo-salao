const express = require('express');
const router = express.Router();

const Salao = require('../model/salaoModel');

// Buscar todos os saloes
router.get('/', async (req, res) => {
    try {
        const saloes = await Salao.find();
        res.status(200).json(saloes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Buscar um salao 
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const salao = await Salao.findById(id);
        res.status(200).json(salao);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Buscar um salao pelo status
router.get('/status/:status', async (req, res) => {
    const { status } = req.params;
    try {
        const saloes = await Salao.find({ status: status });
        res.status(200).json(saloes);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Criar um salao
router.post('/', async (req, res) => {
    const { nome, email,telefone,cidade,bairro,rua,numero,cep,uf,lat,lng, senha } = req.body;

    // Validar os dados
    if(!nome){
        return res.status(400).json({ message: 'O nome é obrigatório' });
    }
    if(!email){
        return res.status(400).json({ message: 'O email é obrigatório' });
    }
    if(!telefone){
        return res.status(400).json({ message: 'O telefone é obrigatório' });
    }
    if(!cidade){
        return res.status(400).json({ message: 'A cidade é obrigatória' });
    }
    if(!bairro){
        return res.status(400).json({ message: 'O bairro é obrigatório' });
    }
    if(!rua){
        return res.status(400).json({ message: 'A rua é obrigatória' });
    }
    if(!numero){
        return res.status(400).json({ message: 'O numero é obrigatório' });
    }
    if(!cep){
        return res.status(400).json({ message: 'O cep é obrigatório' });
    }
    if(!uf){
        return res.status(400).json({ message: 'O uf é obrigatório' });
    }
    if(!lat){
        return res.status(400).json({ message: 'A lat é obrigatória' });
    }
    if(!lng){
        return res.status(400).json({ message: 'A lng é obrigatória' });
    }
    if(!senha){
        return res.status(400).json({ message: 'A senha é obrigatória' });
    }


    const salao = new Salao({
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: {
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            cep: cep,
            uf: uf,
        },
        geo:{
            lat: lat,
            lng: lng
        },
        senha: senha
    });

    // Salvar o salao no banco de dados
    try {
        const novoSalao = await salao.save();
        res.status(201).json({ message: 'Salão criado com sucesso', salao: novoSalao });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login do salao
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    // Validar os dados
    if(!email){
        return res.status(400).json({ message: 'O email é obrigatório' });
    }
    if(!senha){
        return res.status(400).json({ message: 'A senha é obrigatória' });
    }
    
    const salaoExiste = await Salao.findOne({ email: email, senha: senha });
    if(!salaoExiste){
        return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    bcrypt.compare(senha, salaoExiste.senha, (err, result) => {
        if(err){
            return res.status(401).json({ message: 'Falha na autenticação' });
        }
        if(result){
            const token = jwt.sign({
                email: salaoExiste.email,
                salaoId: salaoExiste._id
            }, process.env.JWT_KEY, {
                expiresIn: "1h"
            });
            return res.status(200).json({ message: 'Autenticado com sucesso', token: token });
        }
        res.status(401).json({ message: 'Email ou senha inválidos' });
    });
});

// Atualizar um salao
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updateSalao = await Salao.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: 'Salão atualizado com sucesso', salao: updateSalao });
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Atualizar o status do salao
router.patch('/status/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updateSalao = await Salao.findByIdAndUpdate(id, {status: 'inativo'});
        res.status(200).json({ message: 'Salão atualizado com sucesso', salao: updateSalao });
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;