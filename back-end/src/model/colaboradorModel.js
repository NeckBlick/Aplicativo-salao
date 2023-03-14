const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    telefone:{
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
    foto:{
        type: String,
        required: true
    },
    sexo:{
        type: String,
        enum: ['masculino', 'feminino', 'outro'],
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

module.exports = mongoose.model('Colaborador', colaboradorSchema);