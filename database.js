const mysql = require("mysql");


//as Jon mentioned, we should place this info in .env file.
let details = {
    host: "137.132.92.94",
    port: 12865,
    user: "fintechlab",
    password: "FinTechLab",
    database: "b15_benny",
};

let connection = mysql.createConnection(details);
connection.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Connected to MySQL");
    }
});

// connection.query("mysql query", (errors, records)=> {});
connection.query("select *  from users", (errors, records) => {
    if (errors) {
        console.log(errors);
    } else {
        console.log(records);
    }
});

connection.query("select * from books", (errors, records) => {
    if (errors) {
        console.log(errors);
    } else {
        console.log(records);
    }
});

//to export SQL database
module.exports = {connection} ;