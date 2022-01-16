const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const pgp = require('pg-promise');
const db = pgp('postgres://username:password@host:port/database');
//const Pool = require('pg').Pool;

/******************************************************************* */
/*
const pool = new Pool ({
    user:'me',
    password:'password',
    database:'api',
    host:'localhost',
    port:5432
})
*/
/*********************************************************************/
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/*********************************************************************/
app.post('/api/post',(req,res)=>{
    console.log("data is being sent to the server");
});

app.get('/api/tables',(req,res)=>{
    console.log("fetching data from table to display");
});
/*********************************************************************/
const PORT = process.env.port || 8000;
console.log(`server port : ${PORT}`);
/******************************************************************* */

