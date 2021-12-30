const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const Pool = require('pg').Pool;
const pool = new Pool ({
    user:'me',
    password:'password',
    database:'api',
    host:'localhost',
    port:5432
})
/*********************************************************************/
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/*********************************************************************/


