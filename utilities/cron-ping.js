const cron = require("node-cron");

module.exports = function (callback) {
  cron.schedule("* * * * *", callback);
};
