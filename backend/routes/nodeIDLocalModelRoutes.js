const express = require("express");
const router = express.Router();
const nodeIDLocalModelController = require("../controllers/nodeIDLocalModelController");

router.route("/").get(nodeIDLocalModelController.getnodeIDLocalModel);

module.exports = router;
