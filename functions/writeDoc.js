const express = require('express')
const fsRouter = express.Router()


fsRouter.post('/writeDoc', function(req, res){
    res.send('POST route on writeDoc');
 });

module.exports = fsRouter