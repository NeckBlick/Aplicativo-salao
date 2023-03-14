const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
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
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);