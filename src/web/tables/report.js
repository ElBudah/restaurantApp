const Sequelize = require('sequelize');
const database = require('../db');

const report = database.define('reports', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    report: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
    },
    user: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
    }
})



module.exports =  report;