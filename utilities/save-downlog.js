const DownLog = require("../models/down-log");

module.exports = async function(url) {
    const downlog = new DownLog({ url });

    try {
        const result = await downlog.save();
        console.log("Down log is saved");
    } catch (error) {
        console.log("error in saving log in DB.")
    }
}