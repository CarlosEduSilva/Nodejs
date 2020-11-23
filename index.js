const express = require("express");
const app  = express();

app.get("/", function(req, res){
    res.send("Request success");
})

app.get("/sobre", function(req, res){
    res.send("/sobre");
})

app.get("/produto", function(req,res){
    res.send("produto");
})

app.get("/produto/:id", function(req,res){
    res.status().send({
        title: 'NodeJs Express Api',
        version: "0.0.1"
    })
    res.send("produto id");
})

app.get("/perfil", function(req,res){
    res.send("perfil");
})

app.listen(3000, function(){
    console.log('Server running url : http://localhost:3000');
})