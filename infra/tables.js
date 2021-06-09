class Tables {
    init(connection) {
        console.log('criacao de tabelas')
        this.connection = connection
        this.criarAtendimentos()
    }

    criarAtendimentos() {

        const query = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, data datetime NOT NULL, dataCriacao datetime NOT NULL, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observ text, PRIMARY KEY(id))'

        this.connection.query(query, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada')
            }
        })
    }
}

module.exports = new Tables