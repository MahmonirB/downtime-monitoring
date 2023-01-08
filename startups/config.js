const config = require("config");

module.exports = function() {
  console.log(config)
    if (!process.env.EMAIL_HOST_NAME) {
        throw new Error("FATAL ERROR: EMAIL HOST NAME not found!"); // export EMAIL_HOST_NAME=xxx and unset EMAIL_HOST_NAME
        return process.exit(1);
      }      
}
