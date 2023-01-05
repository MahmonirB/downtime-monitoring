const cron = require("node-cron");
const fs = require("fs");

cron.schedule("0 0 21 * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
  fs.unlink("./error.log", (err) => {
    if (err) throw err;
    console.log("Error file successfully deleted");
  });
});
