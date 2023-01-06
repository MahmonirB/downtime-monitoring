const express = require('express');

const app = express();
require('./startups/routers')(app);
require('./startups/config')(app);
require('./startups/db')();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to server port: ${port} ...`));