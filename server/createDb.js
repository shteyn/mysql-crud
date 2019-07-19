require("dotenv").config({ path: ".env" });

const mysql = require("mysql");
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
con.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected!");
    return con.query(`CREATE DATABASE ${process.env.DB}`, function(
      err,
      result
    ) {
      if (err) {
        con.end();
      } else {
        console.log(`${process.env.DB} Database is created`);
        con.end();
      }
    });
  }
});
