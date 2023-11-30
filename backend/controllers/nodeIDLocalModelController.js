const fs = require("fs");
const path = require("path");

const getnodeIDLocalModel = async (req, res) => {
  try{
    const { port } = req.query;
    const lastTwoDigits = parseInt(port, 10) % 100;

    const filename = 'node' + lastTwoDigits + '_localModel.json';
    const file = path.join(__dirname, "../../output", filename);
    res.sendFile(file);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getnodeIDLocalModel };
