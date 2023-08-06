// este tipo de stream permite leer y escribir a la vez un archivo

const fs = require('fs')

const {Duplex} = require('stream')

const streamLectura = fs.createReadStream('../pipers/archivos/origen.txt')
const escrituraStream = fs.createWriteStream('../pipers/archivos/destino.txt')

// el duplex puede leer y escribir datos al mismo tiempo y se debe definir las acciones para cada uno
const reporte = new Duplex ( {
    // la data q escribira , el encodin que usara y el callback q siempre debe estar
    write(data, encoding, callback) {
        console.log(data)
        // siempre se llama el callback para que no se interrumpa el flujo de la informacion
        callback()
    },
    // solo el size para ver el tamaño que tiene a modo de ejemplo 
    read(size){
        console.log(size)
    }
})

streamLectura.pipe(reporte).pipe(escrituraStream)
