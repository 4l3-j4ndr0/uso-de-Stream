const fs = require('fs')
const archivo = fs.createWriteStream('archivo.txt')

for(let i = 0 ; i<1e6 ; i++){
    archivo.write('hola, soy alejandro rodas y estoy escribiendo un texto en un archivo .txt para hacer uso de Stream')
}

archivo.end();
