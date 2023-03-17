const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
    titulo:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    duracao:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    },
    data_cadastro:{
        type: Date,
        default: Date.now
    },
    foto:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Servico', servicoSchema);