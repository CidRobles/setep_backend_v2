const mongoose = require('mongoose')

const PlantelSchema = mongoose.Schema({
    cct: {
        type: String,
        index: true,
        unique: true,
        required: 'El CCT del plantel es requerido',
        minLength: [10, 'El valor de ({PATH}) del plantel debe tener ({MINLENGTH}) caracteres'],
        maxLength: [10, 'El valor de ({PATH}) del plantel debe tener ({MAXLENGTH}) caracteres'],
        trim: true
    },
    nombre: {
        type: String,
        required: 'El valor de ({PATH}) del plantel es requerido',
        trim: true,
    },
    direccion: {
        calle: String,
        exterior: String,
        interior: String,
        ciudad: String,
        localidad: String,
        estado: String,
        postal: String
    },
    email: {
        type: String,
        unique: true,
    },
    telefono: {
        type: String
    }
}, { timestamps: true })

const plantelModel = mongoose.model('Planteles', PlantelSchema)

module.exports = plantelModel