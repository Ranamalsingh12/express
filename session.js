const express = require("express")
const session = require("express-session")
const app = express();

const PORT = process.env.PORT || 3000

app.use(session({
    secret: "Your Secret Key",
    resave: true,
    saveUninitialized: true
}));

app.get('/',(req, res) => {
    req.session.name = "John";
    return res.send("Session set")
})

app.get("/session",(req, res) =>{
    var name = req.session.name;
    return res.send(name)
})

app.listen(PORT,() => {
    console.log(`Listening the request on http://localhost:${PORT}`);
})