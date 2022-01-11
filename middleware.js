const express = require('express');
const app = express();
const myLogger = function (req, res, next) {
    console.log("Logged");
    next();
}