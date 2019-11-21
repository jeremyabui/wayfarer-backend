const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.get('/verify', ctrl.auth.verify);
router.post('/logout', ctrl.auth.logout);
router.get('/index', ctrl.auth.index);
router.put('/update/:userId', ctrl.auth.update);
// router.put('/updateNew/:userId', ctrl.auth.updateNew);
router.get('/:userId', ctrl.auth.show);

module.exports = router;