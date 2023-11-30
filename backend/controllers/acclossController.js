const fs = require('fs');
const path = require('path');

const getAccloss = async (req, res) => {
    const file = path.join(__dirname, '../../output/globalModel.json');
    res.sendFile(file);
};

module.exports = {getAccloss};