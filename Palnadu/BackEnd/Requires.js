const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const Secratariet =require('./Routes/Secratariat')
const cors = require('cors');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/',Secratariet);

module.exports = app;