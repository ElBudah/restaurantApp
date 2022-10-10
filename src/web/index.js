const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const routes = require('./router/routes');

app.use(express.json());
app.use('/', routes);

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`The server is online on: ${PORT}!`);
})