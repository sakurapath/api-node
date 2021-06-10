const moment = require('moment')
const connection = require('../infra/connection')

class Atendimento {
    adiciona(atendimento) {
        console.log(atendimento)
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = { ...atendimento, dataCriacao, data }
        const query = 'INSERT INTO Atendimentos SET ?'
        connection.query(query, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento