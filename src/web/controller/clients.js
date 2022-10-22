const clientsTable = require('../tables/clients');
const database = require('../db');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

const getAllClients = async (req,res) => {

    await database.sync();

    const AllClients = clientsTable.findAll({
        raw: true
    })

    console.log("Todos os clientes: " + AllClients);

    res.send('ok');
}

const addClients = async(req,res) => {
    await database.sync();

    const {newClient} = req.body;

    await clientsTable.create({
        name : newClient
    })

    res.send('ok')
}

const removeClient = async (req,res) => {

    console.log('ok aqui');
    await database.sync();

    const {removeClient} = req.body;

    await clientsTable.destroy({
        where: {
            id : removeClient
        }
    })

    res.send('ok');

}

const removeAllClients = async(req,res) => {
    console.log('ok aqui');

    await database.sync();
    await clientsTable.destroy({
        truncate: true
    })

    res.send('ok');
}

const login = async(req,res) => {
    let {password} = req.body;

    console.log(password);

    if(password == 'foodanddrink'){
        const token = jwt.sign({id : 1}, 'foodanddrink', {
            expiresIn: 600
        })
        res.cookie('token', token, {
            maxAge: 6000
        }).send('ok');
    }else{
        res.json({auth: 'invalid'})
    }
    
}

const logout = async(req,res) => {
    console.log('ok logout');
    res.clearCookie('token').sendStatus(200);
}

module.exports = {
    getAllClients, addClients, removeClient, removeAllClients, login, logout
}