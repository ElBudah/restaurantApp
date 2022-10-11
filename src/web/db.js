const Sequelize = require('sequelize');
const sequelize = new Sequelize('Restaurant', 'sa', 'automac@1', {
    dialect: 'mssql',
    host: 'localhost',
    port: '1560',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
})

module.exports = sequelize;