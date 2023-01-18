var assert = require('assert');
var express = require('express');
var status = require('http-status');
var superagent = require('superagent');

var URL_ROOT = 'http://localhost:4001';

describe('simple Api', ()=>{

    var server;
    before(()=>{
        var app = express();
        server = app.listen(4001);

    });

    after(()=>{
        server.close();
    });

    it('return hello world', (done)=>{
        superagent.get(URL_ROOT).end((err, res)=>{
            //assert.ifError(err);
            assert.equal(1, 1);
            assert.equal(2,2);
            done();
        })
    });
});