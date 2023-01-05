const express = require('express');

const app = express();
require('./startups/routers')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to server port: ${port} ...`));