const express = require('express')
const router = express.Router()
const { createPlantel, getPlanteles, getPlantelById, updatePlantel, deletePlantel } = require('../controllers/plantel.controller')


router.post('/', createPlantel)
router.get('/', getPlanteles)
router.get('/:id', getPlantelById)
router.put('/:id', updatePlantel)
router.delete('/:id', deletePlantel)

module.exports = router

