const express = require("express");
const path = require("path");
const app = express();

const publicpath = path.resolve(__dirname,'public')
app.use(express.static('public'));

app.get('/', function(req, res){
    req.send("static files")
})

app.listen(3000,, () => {console.log("App Started on PORT 3000")})