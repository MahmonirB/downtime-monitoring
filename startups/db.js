const mongoose = require("mongoose");

module.exports = function() {
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/downTime-monitoring")
  .then((res) => console.log("DB connected ..."));

}