const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Post Cre
router.get('/cities', ctrl.cities.index);
router.post('/cities/create', ctrl.cities.create);

module.exports = router;