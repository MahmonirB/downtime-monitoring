const https = require("https");

module.exports = function checkWebsite(url) {
    return new Promise((resolve, reject) => {
      https
        .get(url, function (res) {
          resolve(res.statusCode === 200);
        })
        .on("error", function (e) {
          resolve(false);
        });
    });
  }
