

const express = require('express');
const app = express();
let db = require('./db.js');
const _ = require('lodash');
const fs = require('fs');
const util = require('util')
const bodyParser = require('body-parser');
const httpCode = require('http-status');
const APIError = require('./apierror')  
const open = util.promisify(fs.open);
const packagesRouter = require('./routes/packages.route');

//console.log(db[0]);
app.use(bodyParser.json({limit: '50mb'}));
app.use('/packages', packagesRouter);
/* 
app.post('/packages',(req,res,next) => {
    console.log(typeof req.body);
    if(!req.body.name){
       return res.status(httpCode.NOT_FOUND).json({error: 'No name'});
    }
    else if(!req.body.description){
        const e = new APIError('description', httpCode.BAD_REQUEST )
        return next(e);
    }else {
        db.push(req.body);
        //open('./db').then();
        return res.json(db);
    }
 });


app.get('/packages/:name',(req,res,next) => {
    if(!_.find(db, {'name': req.params.name})) return next();
   const name = req.params.name.split('-').join(' ');
   console.log(name);
    return res.json(_.find(db, {'name': req.params.name}));
});
app.get('/packages',(req,res,next) =>{
    return res.json(db)
}); */
app.use((error, req, res, next) => {
    if(error instanceof APIError) {
       return res.status(error.status).json({message: error.message});
    }else {
        return next(error);
    }
});
app.use ((error,req, res) => {
    return res.status(httpCode["500"]).json({message: 'Error unknown'})
})
app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
