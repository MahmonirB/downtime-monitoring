const https = require('https');

const server = https.createServer();

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
    var check = await checkWebsite("https://www.digikala.com/");
    console.log(check); //true
}

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listen to server port: ${port} ...`));