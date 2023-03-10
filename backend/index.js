
import express from 'express';
import mysql from 'mysql';

const app = express();


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testbaza"
});


app.get('/', function (req, res) {
    res.json('hello')
})

app.listen(8800, () =>{
    console.log('connected!!!')
})