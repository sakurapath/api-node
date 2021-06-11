const { lista, buscaPorId } = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)

        buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
        res.send('Adicionado com sucesso')
    })
}

