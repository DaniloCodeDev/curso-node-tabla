
const { crearArchivo } = require('./helpers/multiplicar');
const { crearArchivoAsync } = require('./helpers/multiplicar-async');
const argv = require('./config/yargs');
const colors = require('colors');



console.clear();

//crearArchivo( base )
//    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//    .catch( err => console.log(err) );

crearArchivoAsync( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );    