const agremiadoModel = require('../models/agremiado.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createAgremiado = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const agremiado = await agremiadoModel.create(new agremiadoModel({
            ...req.body,
            password: hashedPassword
        }))
        res.status(200).json(agremiado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAgremiados = async (req, res) => {
    try {
        const agremiados = await agremiadoModel.find({})
        res.status(200).json(agremiados)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAgremiadoById = async (req, res) => {
    try {
        const { id } = req.params
        const agremiado = await agremiadoModel.findById(id)
        res.status(200).json(agremiado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateAgremiado = async (req, res) => {
    try {
        const { id } = req.params
        const agremiado = await agremiadoModel.findByIdAndUpdate(id, req.body)

        if (!agremiado) {
            return res.status(404).json({
                message: 'No existe el ID del agremiado'
            })
        }

        const agremiadoActualizado = await agremiadoModel.findById(id)

        res.status(200).json(agremiadoActualizado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteAgremiado = async (req, res) => {
    try {
        const { id } = req.params
        const agremiado = await agremiadoModel.findByIdAndDelete(id)

        if (!agremiado) {
            return res.status(404).json({
                message: 'No existe el ID del agremiado'
            })
        }

        res.status(200).json({ message: 'Agremiado eliminado' })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createAgremiado,
    getAgremiados,
    getAgremiadoById,
    updateAgremiado,
    deleteAgremiado
}