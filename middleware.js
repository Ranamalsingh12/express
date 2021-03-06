const express = require('express');
const app = express();
const myLogger = function (req, res, next) {
    console.log("Logged");
    next();
}

const reqTime = function (req, res, next) {
    req.reqTime = Date.now();
    next();
}

app.use(myLogger);
app.use(reqTime);

app.get('/',function (req, res) {
    res.send(`Current Time: ${req.reqTime}`);
})

app.listen(3000, ()=>{console.log("App started at 3000");})