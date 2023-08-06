const promesaNode = require('fs').promises

promesaNode.copyFile('./archivos/original.txt', './archivos/copia.txt')
.then(() => {
    console.log('copia correcta')
})
.catch(() => {
    console.log(err)
})
.finally(() => {
    console.log('---')
})
