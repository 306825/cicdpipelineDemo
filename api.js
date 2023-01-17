const express = require('express')

module.exports = function(){

    let api = express.Router();

    api.get('/', (req, res)=>{
        res.send('hello world');
    });

    return api;
}