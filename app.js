require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require('morgan');
const apiRouter = require('./api');
const bodyParser = require('body-parser');
//// const cors = require('cors');


//// Setup your Middleware and API Router here

//// const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());

const client = require('./db/client');

app.use('/api', apiRouter);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'route not found' })
 
})

client.connect()


module.exports = app;