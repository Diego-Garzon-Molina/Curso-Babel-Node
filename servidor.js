const http = require('http');
http.createServer((request, response) => {
    response.end('hola515');
}).listen(3500);

process.on('uncaughtException', (error) => {
    console.log('error: ${err}')
});
console.log(process.env.VARIABLE);