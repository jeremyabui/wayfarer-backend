const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Post Cre
router.get('/cities', ctrl.cities.index);
router.post('/cities/create', ctrl.cities.create);
router.get('/cities/:cityId', ctrl.cities.show);
router.put('/cities/update/:cityId', ctrl.cities.update);
router.delete('/cities/delete/:cityId', ctrl.cities.destroy);

module.exports = router;