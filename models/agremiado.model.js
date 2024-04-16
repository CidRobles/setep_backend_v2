const mongoose = require('mongoose')

const AgremiadoSchema = mongoose.Schema({
    expediente: {
        type: String,
        index: true,
        unique: true,
        required: 'El número de expediente del agremiado es requerido',
        minLength: [5, 'El valor de ({PATH}) debe tener al menos {MINLENGTH} caracteres'],
        maxLength: [6, 'El valor de ({PATH}) no puede exceder {MAXLENGTH} caracteres'],
        trim: true
    },
    rfc: {
        type: String,
        required: 'El RFC del agremiado es requerido',
        minLength: [13, 'El valor de ({PATH}) debe tener ({MINLENGTH}) caracteres'],
        maxLength: [13, 'El valor de ({PATH}) debe tener ({MAXLENGTH}) caracteres'],
        trim: true,
        uppercase: true,
    },
    nombre: {
        type: String,
        required: 'El nombre del agremiado es requerido'
    },
    paterno: {
        type: String,
        required: 'El apellido paterno del agremiado es requerido'
    },
    materno: {
        type: String,
        required: 'El apellido materno del agremiado es requerido'
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
    password: {
        type: String,
        required: 'Se requiere una contraseña',
    },
    foto: String
}, { timestamps: true })

const agremiadoModel = mongoose.model('Agremiado', AgremiadoSchema)

module.exports = agremiadoModel