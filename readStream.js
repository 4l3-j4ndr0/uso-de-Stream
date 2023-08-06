const fs = require('fs')

const streamLectura = fs.createReadStream('./archivos/mi_archivo.txt', {encoding: 'utf8'})

streamLectura.on('open', () => {
    console.log('Abriendo archivo')
}).on('data', () => {
    console.log('----')
}).on('close', () => {
    console.log('Archivo cerrado')
}).on('error', () => {
    console.log('Error en el archivo')
})