const express = require('express');
const image = require('./Image');


const routes = express.Router();

    routes.use('/uploads', image.routes);
 

module.exports = { routes };

