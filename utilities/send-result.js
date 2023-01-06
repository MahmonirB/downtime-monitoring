const checkWebsite = require("./check-website");
const saveDownlog = require("./save-downlog");
const sendEmail = require('./email');

module.exports = async function sendResult(url) {
    const result = await checkWebsite(url);
  
    if (result) {
      console.log(`${url} is up and running!`);
    } else {
      console.log(`${url} is down!`);
      saveDownlog(url);
      sendEmail(email, url);
    }
  }