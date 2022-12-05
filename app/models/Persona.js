const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    rut: {
        type: String,
        unique: true,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true
    },
    apellido2: {
        type: String
    },
    fecha_ingreso: {
        type: Date,
        default: Date.now()
    }
});

const Persona = mongoose.model('Persona', PersonaSchema);

module.exports = Persona;