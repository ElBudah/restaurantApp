const Sequelize = require('sequelize');
const reportTable = require('../tables/report');
const database = require('../db');

const addReport = async (req, res) => {

    await database.sync();

    const addReport = req.body.report;
    const { number } = req.body;
    const { user } = req.body;
    console.log(addReport);

    await reportTable.create({
        report: addReport,
        number: number,
        user: user,
    })

    res.send('ok');
}

const removeReport = async (req, res) => {

    await database.sync();

    const { removeId } = req.body;
    console.log('id para ser removido: ' + removeId);

    await reportTable.destroy({
        where: {
            id: removeId
        }
    })
    res.send('ok');
}

const getAllReport = async (req, res) => {
    console.log('ok aqui');

    await database.sync();

    const alldata = await reportTable.findAll({
        raw: true
    })
    console.log(alldata);
    res.json(alldata);
}

const removeAllReport = async(req, res) => {

    await database.sync();
    await reportTable.destroy({
        where: {},
        truncate: true
    })

    res.send('ok');
}

module.exports = {
    addReport, removeReport, getAllReport, removeAllReport
}