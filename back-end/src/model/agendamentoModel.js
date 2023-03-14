const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamentoSchema = new Schema({
    clienteId:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    colaboradorId:{
        type: Schema.Types.ObjectId,
        ref: 'Colaborador',
        required: true
    },
    servicoId:{
        type: Schema.Types.ObjectId,
        ref: 'Servico',
        required: true
    },
    data:{
        type: Date,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);