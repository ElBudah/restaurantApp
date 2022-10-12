const Sequelize = require('sequelize');
const sequelize = new Sequelize('Restaurant','sa', 'test123', {
    dialect: 'mssql',
    host: 'localhost',
    port: '49702',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
})

module.exports = sequelize;