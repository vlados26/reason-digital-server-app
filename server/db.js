const { connect, connection, connections } = require('mongoose');
const { db_url } = require('./config');

const db = connect(db_url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

connection.on('open', () => {
    connections[0];
});

module.exports = db;
