import express from "express"
import cors from "cors"
import { db } from "./db.js";
const app = express();
// const cors = require('cors')
// const mysql = require('mysql')
import  postRoutes from './routes/posts.js'
import  authRoutes from './routes/auth.js'
import  userRoutes from './routes/users.js'
import cookieParser from "cookie-parser";


app.use(cors())
app.use(express.json());
app.use(cookieParser())



// app.get('/',(req,res)=>{
//     res.json("hello form backend")
// })

// app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)

// app.use('/api/posts',postRoutes)

// app.get('/api/test',(req,res)=>{
//         console.log("hello world");
// })

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