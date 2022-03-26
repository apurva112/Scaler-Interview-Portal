const express = require('express')
const interviewControllers = require('../controllers/interviewController');
const interviewMiddlewares = require('../middlewares/interviewVal');

const router = express.Router()

router.route('/')
.get(interviewControllers.getAll)
.post(interviewMiddlewares.lenCheck, interviewMiddlewares.avalCheck, interviewControllers.createInterview)

router.route('/:id')
.get(interviewControllers.getById)
.put(interviewMiddlewares.lenCheck, interviewMiddlewares.avalCheck, interviewControllers.editInterview)

module.exports = router;