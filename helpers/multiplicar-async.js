const fs = require('fs');
const colors = require('colors');

const crearArchivoAsync = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        console.clear();
        let salida, consola = '';        

        for(let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
        }

        if(listar){

            console.log('========================'.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('========================'.green);
            console.log( consola );
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        //console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt creado`;    

    } catch (err) {
        throw err;
    }  

}

module.exports = {
    crearArchivoAsync
};