const express = require('express')
const router = express.Router()
const globalModelController = require('../controllers/globalModelController')

router.route('/')
    .get(globalModelController.getglobalModelList)

module.exports = router