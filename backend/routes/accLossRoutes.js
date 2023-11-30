const express = require('express')
const router = express.Router()
const acclossController = require('../controllers/acclossController')

router.route('/')
    .get(acclossController.getAccloss)

module.exports = router