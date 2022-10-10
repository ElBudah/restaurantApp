const express = require('express');
const routes = express.Router();
const reports = require('../controller/reports');
const jwt = require('jsonwebtoken');

const validateUser = async(req,res,next) => {

    const token = req.cookies.token;
    jwt.verify(token, 'baab5500', (err) => {
        if(err) console.log(err);
        return res.json({value: 'invalid'}).end();
    })
    
}

routes.get('/getallreports', validateUser, reports.getAllReport);
routes.post('/addreport', validateUser,  reports.addReport);
routes.delete('/deletereport', validateUser, reports.removeReport);

module.exports = routes;