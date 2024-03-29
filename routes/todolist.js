const express = require('express');

const todoController = require('../controller/todolist');

const router = express.Router();

router.get('/', todoController.getTodoList);

module.exports = router;
