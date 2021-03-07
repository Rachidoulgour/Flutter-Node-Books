const express = require('express');
const api = express.Router();
const PublicationController = require('../controllers/publication');


api.post('/publication/', PublicationController.savePublication);