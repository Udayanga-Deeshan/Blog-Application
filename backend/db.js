import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"test"
})

let isDBConnected = false;

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
    } else {
        isDBConnected = true;
        console.log("Connected to MySQL server");
    }
});