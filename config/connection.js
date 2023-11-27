const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/socialmediaapi');

module.exports = connection;
