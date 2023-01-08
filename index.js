const express = require('express');

const app = express();
require('./startups/routers')(app);
require('./startups/config')(app);
require('./startups/debugging')(app);
require('./startups/db')();
require('./startups/logging')();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to server port: ${port} ...`));