const https = require("https");
const express = require("express");
const cronJob = require("../startups/cron-ping");

const router = express.Router();

router.post("/", async (req, res) => {
  const { url } = req.body;
  const result = await checkWebsite(req.body.url);

  if (result) {
    res.status(200).send("Server is up and running!");
  } else {
    res.status(500).send("Server is down!");
  }
  cronJob(async () => {
    sendResult(url);
  });
});

async function sendResult(url) {
  const result = await checkWebsite(url);

  if (result) {
    console.log("Server is up and running!");
  } else {
    console.log("Server is down!");
  }
}

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
