const mongoose = require("mongoose");

const DownLog = mongoose.model(
    'Downlog',
    new mongoose.Schema({
        timestamp: { type: Date, default: new Date},
        url: String
    })
);

module.exports = DownLog;
