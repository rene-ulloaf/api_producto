const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Persona = require('./routes/persona');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/persona', Persona);

module.exports = app