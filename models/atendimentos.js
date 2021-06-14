const moment = require('moment')
const connection = require('../infra/connection')

class Atendimento {
    adiciona(atendimento, res) {

        console.log(atendimento)

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const validateDate = moment(data).isSameOrAfter(dataCriacao)
        const validateClient = atendimento.cliente.length >= 5

        const validArray = [{
            name: 'data',
            valid: validateDate,
            msg: 'Data deve ser maior que a data atual'
        },
        {
            name: 'client',
            valid: validateClient,
            msg: 'Nome do cliente deve ter mais de 5 caracteres'
        }
        ]

        const errors = validArray.filter(field => !field.valid)

        const isErrors = errors.length

        if (isErrors) {
            res.json(errors)
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const query = 'INSERT INTO Atendimentos SET ?'
            connection.query(query, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }
    }

    lista(res) {
        const query = 'SELECT * FROM atendimentos'
        connection.query(query, (errors, results) => {
            if (errors) {
                res.status(400).json(errors)
            } else {
                res.status(200).json(results)
            }
        })

    }

    buscaPorId(id, res) {
        const query = `SELECT * FROM atendimentos WHERE id=${id}`

        connection.query(query, (errors, results) => {
            const atendimento = results[0]
            if (errors) {
                res.status(400).json(errors)
            } else {
                res.status(200).json(atendimento)
            }

        })
    }

    atualiza(id, values, res) {
        if (values.data) {
            values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const query = `UPDATE atendimentos SET ? WHERE id = ?`

        connection.query(query, [values, id], (errors, results) => {
            if (errors) {
                res.status(400).json(errors)
            } else {
                res.status(200).json(results)
            }
        })
    }

    deleta(id, res) {
        const query = 'DELETE FROM atendimentos WHERE id = ?'

        connection.query(query, id, (errors, results) => {
            if (errors) {
                res.status(400).json(errors)
            } else {
                res.status(200).json(results)
            }
        })
    }
}

module.exports = new Atendimento