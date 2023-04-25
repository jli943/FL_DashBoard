const fs = require("fs");
const path = require("path");

const getnodeIDData = async (req, res) => {
  const file = path.join(__dirname, "../../output/nodeID_data.json");
  res.sendFile(file);
};

module.exports = { getnodeIDData };
