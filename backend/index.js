import express from "express"
import cors from "cors"
import mysql from "mysql"
const app = express();
// const cors = require('cors')
// const mysql = require('mysql')
import  postRoutes from './routes/posts.js'


app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"test"
})

// app.get('/',(req,res)=>{
//     res.json("hello form backend")
// })

app.use('/api/posts',postRoutes)

let isDBConnected = false;

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
    } else {
        isDBConnected = true;
        console.log("Connected to MySQL server");
    }
});

app.get('/students', (req, res) => {
    if (!isDBConnected) {
        return res.status(500).json({ error: "Database connection error" });
    }
    
    const q = "SELECT * FROM student";
    db.query(q, (err, data) => {
        if (err) {
            console.error("MySQL error:", err.message);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json(data);
    });
});






app.listen(4000,(req,res)=>{
    console.log("server is running on port 4000");
})