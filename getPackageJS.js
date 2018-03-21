const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const _ = require('lodash');

function getPackageJS(path){
    //if(path.contains('.bin')) return {}
    return readFile(path, 'utf8')
    .then((data) => {
        return JSON.parse(data);
    })
    .then(parserData)
   // .then(console.log);

}
function parserData(data) {
    return {
        name: _.get(data, 'name', 'prueba'),
        description:  _.get(data, 'description'),
        version: _.get(data, 'version'),
        license: _.get(data, 'license'),
    }
};
module.exports = getPackageJS;