const mongoose = require ('mongoose')

const dreamSchema = new mongoose.Schema({
    content: String
})

dreamSchema.set('toJSON',{
    transform: (doc, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Dream',dreamSchema)
