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
    console.log('ok aqui');

    let {password} = req.body;
    let token = '';
    console.log(password);

    if(password == 'foodanddrink'){
        token = jwt.sign({id : 1}, 'foodanddrink', {
            expiresIn: 600
        })

    }else{

    }
    console.log(token);
    res.cookie('token', token);
}

con



module.exports = {
    getAllClients, addClients, removeClient, removeAllClients, login
}