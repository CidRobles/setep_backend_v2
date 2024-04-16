const express = require('express')
const router = express.Router()
const { createAgremiado, getAgremiados, getAgremiadoById, updateAgremiado, deleteAgremiado } = require('../controllers/agremiado.controller')


router.post('/', createAgremiado)
router.get('/', getAgremiados)
router.get('/:id', getAgremiadoById)
router.put('/:id', updateAgremiado)
router.delete('/:id', deleteAgremiado)

module.exports = router

