const dbConfig = require('../config/dg.config')
const { Client } = require('pg');

const con = new Client({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

con.connect((error) =>{
    if(error) throw error;
    console.log('Connection established')
})

con.end();

module.exports = con;