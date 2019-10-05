const express = require('express');
const router = express.Router();

const accountController = require('../controllers/userAccount');

router.get('/create-list', accountController.getCreateUser);

router.post('/create-list', accountController.postCreateUser);

module.exports = router;