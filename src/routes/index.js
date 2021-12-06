const express = require('express')

const { taskController } = require('../controllers');

const router = express.Router()

// tasks
router.get('/task', taskController.getTasks);
router.post('/task', taskController.postTask);
router.put('/task/:id', taskController.putTask);

module.exports = router;
