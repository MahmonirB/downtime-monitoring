const express = require('express');
const home = require('./routes/home');

const app = express();

app.use('/', home);

app.listen(3000, () => console.log(`listen to server port: ${3000} ...`));