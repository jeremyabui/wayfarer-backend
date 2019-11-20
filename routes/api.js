const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Post Cre
router.post('/cities', ctrl.cities.index);

