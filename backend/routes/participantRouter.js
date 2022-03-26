const express = require('express')
const participantController = require('../controllers/participantController')

const router = express.Router()

router.route('/').get(participantController.getAll);

module.exports = router;