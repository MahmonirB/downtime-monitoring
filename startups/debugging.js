const helmet = require("helmet");
const morgan = require("morgan");

module.exports = function (app) {
  if (app.get("env") === "development") {
    // export ENV_NODE=production to test this block
    debug("Morgen enabled...");
    app.use(morgan("tiny"));
  }

  app.use(helmet());
};
