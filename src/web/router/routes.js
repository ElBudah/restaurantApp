const express = require('express');
const routes = express.Router();
const reports = require('../controller/reports');
const clients = require('../controller/clients');
const jwt = require('jsonwebtoken');

const validateUser = async (req, res, next) => {

    const token = req.cookies.token;
    console.log("Valor do token: " + token);
    jwt.verify(token, 'foodanddrink', (err) => {
        if(err) {
            console.log(err);
            return res.json({value: 'Token invalid'}).end();
        }
        next()
    })


}

//Reports routes
routes.get('/getallreports', validateUser, reports.getAllReport);
routes.post('/addreport', reports.addReport);
routes.delete('/deletereport', validateUser, reports.removeReport);
routes.delete('/deleteallreport', validateUser, reports.removeAllReport);

//Client routes
routes.get('/getallclients', validateUser, clients.getAllClients);
routes.post('/addclients', validateUser, clients.addClients);
routes.delete('/removeclient', validateUser, clients.removeClient);
routes.delete('/removeallclients', validateUser, clients.removeAllClients);

//Login routes
routes.post('/login', clients.login);
routes.get('/logout', clients.logout);


module.exports = routes;