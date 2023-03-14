const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    capa:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    endereco:{
        cidade:{
            type: String,
            required: true
        },
        bairro:{
            type: String,
            required: true
        },
        rua:{
            type: String,
            required: true
        },
        numero:{
            type: String,
            required: true
        },
        cep:{
            type: String,
            required: true
        },
        uf:{
            type: String,
            required: true
        }
    },
    geo:{
        lat:{
            type: Number,
            required: true
        },
        lng:{
            type: Number,
            required: true
        }
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

module.exports = mongoose.model('Salao', salaoSchema);