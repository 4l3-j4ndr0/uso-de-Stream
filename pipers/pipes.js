const fs = require('fs')

const streamLectura = fs.createReadStream('./archivos/origen.txt')
const escrituraStream = fs.createWriteStream('./archivos/destino.txt')

// de esta forma cada vez que se valla leyendo algo del archivo origen se va direccionando con pipe al archivo destino
streamLectura.pipe(escrituraStream)

streamLectura.on('end', () => {
    console.log('Proceso finalizado')
})