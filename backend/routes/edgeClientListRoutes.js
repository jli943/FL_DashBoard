const express = require('express')
const router = express.Router()
const edgeClientListController = require('../controllers/edgeClientListController')

router.route('/')
    .get(edgeClientListController.getEdgeClientList)

module.exports = router