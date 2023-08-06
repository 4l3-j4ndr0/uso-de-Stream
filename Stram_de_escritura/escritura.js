// comparativa de escritura tradicional sincrona vs escritura asincrona con stream

const fs = require('fs')

let contenido = '1234567890'
let iteraciones = 15

// con stream
const streamEscritura = fs.createWriteStream('../archivos/mi_archivo3.txt')

for(let i = 0 ; i < iteraciones ; i++){
    contenido += contenido 
    streamEscritura.write(contenido, res => {
        console.log('---')
    })
}

// sistema tradicional 
fs.writeFile('../archivos/mi_archivo2.txt', contenido, () => {
    console.log('escritura directa terminada')
})


