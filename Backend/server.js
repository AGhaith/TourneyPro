const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host :'localhost',
    user :"root" ,
    password : "",
})
app.get('/', (req, res) => {
    return res.json("from backend side")
})

app.get('/omda' , (req , res) => {
    const sql = "SELECT * FROM omda" ;  
    db.query(sql , (err , data)  => {
        if (err) return json(err);
        return res.json(data ) ; 
    })
})

app.listen(8081,()=> {
    console.log("listening");
})