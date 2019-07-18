const mysql = require('mysql');
const util = require('util');
const settings = require('./db-settings.json');

const connection = mysql.createConnection(settings);

module.exports = connection;
