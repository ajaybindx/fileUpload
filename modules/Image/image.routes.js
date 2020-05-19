const express = require('express');
const controller = require('./image.controller');


const routes = express.Router();


routes.post('/', controller.uploadImage);

module.exports = routes;
