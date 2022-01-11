const express = require("express");
const app = express();

const port = 3000;

const data = {
    id :1,
    name : "India"
}

app.get('/', function(req, res){
    res.end("Welcome to my home page")
})

app.get('/about', (req ,res) =>  {
    res.send("welcome to my about page")
})

app.get('/weather', (req ,res) =>  {
    res.json(data)
})

app.listen(port, ()=>{console.log("server is started on port",port)})