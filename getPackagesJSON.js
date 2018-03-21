const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
const path = './node_modules/';
const gp = require('./getPackageJS');

const jsArray = [];

function getDir(){
    return readDir(path)
    .then(getPackagesFromList);
        
} 
function getPackagesFromList(list){
    const promises = [];
    list.forEach((element) => {       
        promises.push(gp(path + element + '/package.json')
        .then()
        .catch(() => {return null}));  
    });
    return Promise.all(promises);
}
getDir().then(console.log);
