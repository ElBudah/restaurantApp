const Sequelize = require('sequelize');
const database = require('./db');

const clients = database.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
    }
})

module.exports = clients;