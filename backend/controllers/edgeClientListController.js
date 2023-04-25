const fs = require('fs');
const path = require('path');

const getEdgeClientList = async (req, res) => {
    const file = path.join(__dirname, '../../output/edgeClientList.json');
    res.sendFile(file);
};

module.exports = { getEdgeClientList };