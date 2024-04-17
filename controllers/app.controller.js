const agremiadoModel = require('../models/agremiado.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const login = async (req, res) => {
    try {
        const agremiado = await agremiadoModel.findOne({ email: req.body.email })
        if (!agremiado) return res.status(404).send(`No existe agremiado con el email ${email}`)
        const validPassword = await bcrypt.compare(req.body.password, agremiado.password);
        if (!validPassword) return res.status(401).send('La contraseña es incorrecta')
        const token = jwt.sign({ id: agremiado._id }, process.env.JWT_SECRET)
        res.send({
            agremiado,
            token,
            login: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const home = async (req, res) => {
    console.log(req)
    res.json({
        message: 'You have accessed the protected route'
    })
}


module.exports = {
    login,
    home
}