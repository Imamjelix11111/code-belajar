const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "mybrothers" 

})

module.exports = db