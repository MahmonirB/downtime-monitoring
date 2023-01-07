const nodemailer = require("nodemailer");
const config = require("../startups/config");

module.exports = function (senderEmail, url) {
  let transporter = nodemailer.createTransport({
    host: config.get("EMAIL_HOST_NAME"),
    port: 2525,
    auth: {
      user: config.get("EMAIL_USER_NAME"),
      pass: config.get("EMAIL_PASSWORD"),
    },
  });

  const message = {
    from: "from-example@email.com",
    to: senderEmail,
    subject: "DownTime is Logged",
    text: `Hello, A down time is submitted to your server address: ${url} now. Please take care of that.`,
  };

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
