const express = require('express')
const app = express()
const dreamRouter = require('./controllers/dream')
const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.set('strictQuery',false)
mongoose.connect(config.MONGODB_URI).then(
    console.log('Connected to MongoDB')
)

app.use(express.json())

app.use('/api/dream',dreamRouter)

module.exports = app 
