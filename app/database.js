const { Client } = require('pg');

const client = new Client(process.env.PG_URI);

// On peut aussi créer un client avec un objet qui contient toutes les infos de connexion au lieu d'une seule URI
/*
const client = new Client({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
});
*/

// je demande au client de se connecter a la BDD
client.connect();

module.exports = client;