const Dream = require('../models/dream')
const router = require('express').Router()

router.get('/', async(request,response) => {
    const dreams = await Dream.find({})
    response.status(200).json(dreams)
})

router.post('/', async(request,response) => {
    const dream = request.body

    if (dream.content===undefined||dream.content==='')
        return response.status(400).end()
    
    const newDream = new Dream({
        content: dream.content
    })

    const savedDream = await newDream.save()
    response.status(201).json(savedDream)
})

module.exports=router
