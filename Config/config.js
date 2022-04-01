const mssql = require('mssql')
const dotenv = require("dotenv")
dotenv.config()

let config = {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
    port: 1433,
    pool:{
        max: 20,
        min: 0,
        idleTimeoutMillis: 3600
    },
    options: {
        encrypt: false,
    }
  }


  module.exports = config;