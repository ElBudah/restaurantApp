const clientsTable = require('../tables/clients');
const database = require('../db');

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

    await database.sync();

    const {removeClient} = req.body.removeClient;

    await clientsTable.destroy({
        where: {
            id : removeClient
        }
    })

    res.send('ok');

}

module.exports = {
    getAllClients, addClients, removeClient
}