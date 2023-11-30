const fs = require('fs');
const path = require('path');

const getRelationship = async (req, res) => {
    const file = path.join(__dirname, '../../output/relationship.json');
    res.sendFile(file);
};

module.exports = {getRelationship};