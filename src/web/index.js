const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const routes = require('./router/routes');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/', routes);

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`The server is online on: ${PORT}!`);
})