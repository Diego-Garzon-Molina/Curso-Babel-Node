const fs = require('fs');
let request = require('request');
function suma(a,b) {
    return new Promise (( resolve, reject) => {
        setTimeout(() => {
            resolve (a + b);
        });
        
});
}
const util = require('util');
const readFile = util.promisify(fs.readFile);
suma1 = [];
/* fs.readFile('./prueba.txt', 'utf8', (err, resultado) => {
    const arr1 = resultado.split(',');
    console.log(arr1);
    suma1.push(arr1);
    console.log(suma1);
})
 */
async function leerFichero(fichero){
       const result = await readFile(fichero, 'utf8')
       .then((resultado) => {
            const arr1 = resultado.split(',');
            return arr1;
       })
  // console.log(result)
}

function getUrl(url){
    return new Promise((resolve,reject) => {
        request(url,(error, response, body) => {
            if(error){
                return reject (error);
            }
            if(!response || response.statusCode != 200){
                return reject({error: 'statusCode', code: response.statusCode});
            }
            return resolve(body);
        })
    })
}
getUrl('http://www.mocky.io/v2/5aafa9ca2d00005a006efeff').then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err);
});
const request1 = util.promisify(request);
request1('http://www.mocky.io/v2/5aafa9ca2d00005a006efeff').then((result)=>{
    console.log(result.body)
}).catch((err)=>{
    console.err(err);
});

//console.log(leerFichero('./prueba.txt'))
