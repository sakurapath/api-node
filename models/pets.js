const conn = require('../infra/connection')
class Pets {
    adiciona(pet, res) {
        console.log(pet)
        const query = "INSERT INTO pets SET ?"
        conn.query(query, pet, error => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(pet)
            }
        })
    }
}

module.exports = new Pets()