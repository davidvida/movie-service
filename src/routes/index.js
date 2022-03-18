const express = require('express')

const { movieController } = require('../controllers');

const router = express.Router()

// movies
router.get('/movies', movieController.getMovies);
router.post('/movies', movieController.postMovie);
router.patch('/movies/:id', movieController.patchMovie);

module.exports = router;
