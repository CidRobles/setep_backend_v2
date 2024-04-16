const plantelModel = require('../models/plantel.model')

const createPlantel = async (req, res) => {
    try {
        const plantel = await plantelModel.create(req.body)
        res.status(200).json(plantel)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getPlanteles = async (req, res) => {
    try {
        const planteles = await plantelModel.find({})
        res.status(200).json(planteles)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getPlantelById = async (req, res) => {
    try {
        const { id } = req.params
        const plantel = await plantelModel.findById(id)
        res.status(200).json(plantel)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updatePlantel = async (req, res) => {
    try {
        const { id } = req.params
        const plantel = await plantelModel.findByIdAndUpdate(id, req.body)

        if (!plantel) {
            return res.status(404).json({
                message: 'No existe el ID del plantel'
            })
        }

        const plantelActualizado = await plantelModel.findById(id)

        res.status(200).json(plantelActualizado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletePlantel = async (req, res) => {
    try {
        const { id } = req.params
        const plantel = await plantelModel.findByIdAndDelete(id)

        if (!plantel) {
            return res.status(404).json({
                message: 'No existe el ID del plantel'
            })
        }

        res.status(200).json({ message: 'Plantel eliminado' })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createPlantel,
    getPlanteles,
    getPlantelById,
    updatePlantel,
    deletePlantel
}