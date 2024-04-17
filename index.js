// Server
const express = require('express')
// Database
const mongoose = require('mongoose');
// Routes
const appRoutes = require('./routes/app.routes.js')
const agremiadoRoutes = require('./routes/agremiado.routes.js')
const plantelRoutes = require('./routes/plantel.routes.js')
// Config
require('dotenv').config()
// Middleware
const app = express()
app.use(express.json())
// Endpoints
app.use('/api', appRoutes)
app.use('/api/agremiados', agremiadoRoutes)
app.use('/api/planteles', plantelRoutes)
app.get('/', (req, res) => {
    console.log('API loaded')
    res.send('API loaded')
})



mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
        console.log('Connected to database!')
        app.listen(4400, () => {
            console.log('Server running on port 4400')
        })
    });