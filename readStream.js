// leer el archivo y hacer uso de los Listener que brinda el stream

const fs = require('fs')

const streamLectura = fs.createReadStream('./archivos/mi_archivo.txt', {encoding: 'utf8'})

streamLectura.on('open', () => {
    console.log('Abriendo archivo')
    // evento de cuando lee
}).on('data', () => {
    console.log('----')
    // evento de cuando termina
}).on('close', () => {
    console.log('Archivo cerrado')
    // evento para captura de error para manejo de errores
}).on('error', () => {
    console.log('Error en el archivo')
})