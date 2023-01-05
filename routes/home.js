const https = require("https");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const result = await checkWebsite(req.body.url);

  if (result) return res.send("Server is up and running!");

  return res.status(500).send("Server is down!");
});

function checkWebsite(url) {
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

module.exports = router;
