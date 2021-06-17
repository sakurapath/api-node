const fs = require('fs')

fs.createReadStream('./assets/dog.png')
    .pipe(fs.createWriteStream('./assets/dog-stream.png'))
    .on('finish', () => {
        console.log("Imagem criada com sucesso")
    })