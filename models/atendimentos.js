const connection = require('../infra/connection')

class Atendimento {
    adiciona(atendimento) {
        const query = 'INSERT INTO Atendimentos SET ?'
        connection.query(query, atendimento, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento