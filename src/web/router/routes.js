const express = require('express');
const routes = express.Router();
const reports = require('../controller/reports');
const clients = require('../controller/clients');
const jwt = require('jsonwebtoken');

const validateUser = async(req,res,next) => {

    const token = req.cookies.token;
    jwt.verify(token, 'baab5500', (err) => {
        if(err) console.log(err);
        return res.json({value: 'invalid'}).end();
    })
}

//Reports routes
routes.get('/getallreports', reports.getAllReport);
routes.post('/addreport',  reports.addReport);
routes.delete('/deletereport', reports.removeReport);
routes.delete('/deleteallreport', reports.removeAllReport);

//Client routes
routes.get('/getallclients', clients.getAllClients);
routes.post('/addclients', clients.addClients);
routes.delete('/removeclient', clients.removeClient);

module.exports = routes;