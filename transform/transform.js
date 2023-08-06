const fs = require('fs')
const {Transform} = require('stream')

const streamLectura = fs.createReadStream('../pipers/archivos/origen.txt')
const escrituraStream = fs.createWriteStream('../pipers/archivos/destinoMayuscula.txt')

streamLectura.setEncoding('utf-8')

const filtro = new Transform( {
    transform(data,encodin,callback){
        // va tomando la informacion que va llegando en buffers y la va metiendo dentro del resultado final con el cambio deseado
        this.push(data.toString().toUpperCase())
        callback()
    },
    // es necesario invocar final pq es el metodo que indicara la terminacion de la lectura y podemos comenzar a trabajr con los datos 
    final(callback){
        callback()
    }
})

streamLectura.pipe(filtro).pipe(escrituraStream)