const mysql = require('mysql');
const util = require('util');
const settings = require('./db-settings');

const connection = mysql.createConnection(settings);

module.exports = connection;
