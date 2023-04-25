const express = require("express");
const router = express.Router();
const nodeIDDataController = require("../controllers/nodeIDDataController");

router.route("/").get(nodeIDDataController.getnodeIDData);

module.exports = router;
