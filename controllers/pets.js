const Pet = require('../models/pets')

module.exports = app => {
    app.get('/pets', (req, res) => {
        res.send("OLA MUNDO")
    })

    app.post('/pets', (req, res) => {
        const pet = req.body
        Pet.adiciona(pet, res)
    })
}