const clientsTable = require('../tables/clients');
const database = require('../db');
const jwt = require('jsonwebtoken');

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
    let validation = false;
    console.log(password);

    if(password === 'foodanddrink'){
        const token = jwt.sign({id : 1}, 'foodanddrink', {
            expiresIn: 7000
        })
        validation = true;
        console.log(token);
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 3600000
        }).send(validation);
    }else{
        res.send(validation);
    }
    
}

const logout = async(req,res) => {
    console.log('ok logout');
    res.clearCookie('token').sendStatus(200);
}

const gettoken = async(req,res) => {
    let token = req.cookies.token;
    console.log("valor do token: "+token);
    res.json(token);
}

module.exports = {
    getAllClients, addClients, removeClient, removeAllClients, login, logout, gettoken
}