const express = require('express');
const route = require('./route/cardapios');
const app = express();

app.use(route);

app.listen(3000, ()=> {
    console.log('teste')
})