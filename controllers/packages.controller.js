const db = require('../db.js');
const _ = require('lodash');
function list(req, res){
    return res.json(db);
}
function get(req,res){
    return res.json(_find(db, {'name': req.params.name}))
}
function create(req, res){
        db.push(req.body);
        //open('./db').then();
        return res.json(db);
    
}

module.exports = {
    list,
    get,
    create
};