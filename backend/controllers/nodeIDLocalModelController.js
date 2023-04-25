const fs = require("fs");
const path = require("path");

const getnodeIDLocalModel = async (req, res) => {
  const file = path.join(__dirname, "../../output/nodeID_localModel.json");
  res.sendFile(file);
};

module.exports = { getnodeIDLocalModel };
