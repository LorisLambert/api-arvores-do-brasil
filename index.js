const express = require('express');
const server = express();
const arvores = require('./src/data/arvores.json')

server.get('/arvores', (req, res)=> {
    return res.json(arvores)
});

server.listen(3000, () =>{
    console.log('Server working!')
});