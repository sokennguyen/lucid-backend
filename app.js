const express = require('express')
const app = express()
const dreamRouter = require('./controllers/dream')
const mongoose = require('mongoose')
const config = require('./utils/config')
const cors = require('cors')

mongoose.set('strictQuery',false)
mongoose.connect(config.MONGODB_URI).then(
    console.log('Connected to MongoDB')
)

app.use(cors())
app.use(express.json())

app.use('/api/dream',dreamRouter)

module.exports = app 
