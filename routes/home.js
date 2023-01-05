const https = require("https");
const express = require("express");
const cronJob = require("../utilities/cron-ping");
const checkWebsite = require("../utilities/check-website");
const sendResult = require("../utilities/send-result");

const router = express.Router();

router.post("/", async (req, res) => {
  const { url } = req.body;
  const result = await checkWebsite(req.body.url);

  if (result) {
    res.status(200).send(`${url} is up and running!`);
  } else {
    res.status(500).send(`${url} is down!`);
  }
  cronJob(async () => {
    sendResult(url);
  });
});

module.exports = router;
