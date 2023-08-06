const fs = require('fs')

console.time('tiempo de respuesta')

// lectura de forma sincronica y bloqueante , tiempo de respuesta 995.556ms
// for(let i = 0 ; i<=10 ; i++){
//     fs.readFileSync('archivo.txt', 'utf-8')
// }

// lectura de forma asincronica y no bloqueante con stream, tiempo de respuesta 1.741ms
for(let i = 0 ; i<=10 ; i++){
    const stream = fs.createReadStream('archivo.txt', {encoding: 'utf8'})
 }

console.timeEnd('tiempo de respuesta')

