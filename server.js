// load all required packages

const express = require('express');
const routes = require('./modules');
const bodyParser = require('body-parser');
const dotenv = require(`dotenv`);

const app = express();
app.use(bodyParser.json({ type: 'application/json' })); 
app.use(bodyParser.urlencoded({ extended: true }));



// Public Folder
app.use(express.static('public'));

dotenv.config();

// port of server && connection to mongodb
const port = process.env.PORT || 3000;


app.use('/api', routes.routes);
app.listen(port);

console.log('Server is running on ' + port);
