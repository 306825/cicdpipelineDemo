const express = require('express');

const app = express();

app.use('/api/v1',require('./api')());

app.listen(4000, ()=>{
    console.log('listening on port 6000');
})
