var http = require('http');
var https = require('https');

test();

function checkWebsite(url) {
    return new Promise((resolve, reject) => {
      https
        .get(url, function(res) {
          console.log(url, res.statusCode);
          resolve(res.statusCode === 200);
        })
        .on("error", function(e) {
          resolve(false);
        });     
    })
}
async function test(){
    var check = await checkWebsite("https://stackoverflow.com/");
    console.log(check); //true
}