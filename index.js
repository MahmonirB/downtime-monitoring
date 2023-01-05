const express = require('express');
const home = require('./routes/home');

const app = express();

app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to server port: ${port} ...`));