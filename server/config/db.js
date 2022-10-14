const mysql = require('mysql2')


const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Mern@123...",
    database: "blogpost"

})

module.exports=db