const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'database-1.caf0igeg9njj.us-east-2.rds.amazonaws.com',
    user: 'masterUsername',
    password: 'papaya123*T',
    database: 'CRUDDataBase'
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/login/insert', (req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = 'INSERT INTO users (name, email, password) VALUES (?,?,?)'
    db.query(sqlInsert,[name, email, password], (err, result)=> {
        console.log(result);
    })
})

app.listen(3001, ()=> {
    console.log('Running on port 3001');
})