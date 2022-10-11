const Sequelize = require('sequelize');

const addReport = async(req,res) => {
    console.log('ok');
    res.send('ok');
}

const removeReport = async(req,res) => {
    console.log('ok');
    res.send('ok');
}

const getAllReport = async(req,res) =>{
    console.log('ok aqui');

    const database = require('../db');
    const report = require('../report');

    await database.sync();

    const alldata = await report.findAll({
        raw: true
    })

    console.log(alldata);
    res.send('ok');
}

const getAllUser = async(req,res) => {
    console.log('ok aqui também');

    const database
}


module.exports = {
    addReport, removeReport, getAllReport, getAllUser
}