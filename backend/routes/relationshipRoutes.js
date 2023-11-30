const express = require('express')
const router = express.Router()
const relationshipController = require('../controllers/relationshipController')

router.route('/')
    .get(relationshipController.getRelationship)

module.exports = router