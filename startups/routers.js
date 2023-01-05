const express = require('express');
const home = require('../routes/home');

module.exports = function(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); // built-in middleware func
    app.use(express.static("public"));
    app.use('/', home);
}
