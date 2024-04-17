const express = require('express')
const router = express.Router()
const { login, home } = require('../controllers/app.controller')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/login', login)
router.get('/home', authMiddleware, home)


module.exports = router

