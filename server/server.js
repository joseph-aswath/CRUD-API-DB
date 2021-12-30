const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
/*********************************************************************/
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
/*********************************************************************/


