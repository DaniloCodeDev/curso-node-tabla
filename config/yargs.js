const argv = require('yargs')
                        .option('b',{  
                          alias: 'base',
                          type: 'number',
                          demandOption: true,
                          describe: 'Es la base de la tabla de multiplar'  
                        })
                        .option('l',{  
                            alias: 'listar',
                            type: 'boolean',                            
                            default: false,
                            describe: 'Muestra la tabla en consola'
                        })
                        .option('h',{  
                            alias: 'hasta',
                            type: 'number',                            
                            default: false,
                            describe: 'Tope a multiplicar'
                        })  
                        .check( (argv, option) => {
                            //console.log('yargs', argv);
                            if( isNaN(argv.b) ){
                                throw 'La base tiene que ser un numero';
                            }
                            return true;
                        })  
                        .argv;

module.exports = argv;                     