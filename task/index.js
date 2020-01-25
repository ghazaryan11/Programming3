var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/google", function(req, res){
    res.redirect('https://www.google.com/')
});
app.get("/google/search/:search", function(req, res){
    res.redirect('https://www.google.com/search?q='+ req.params.search)
});
app.get("/*", function(req, res){
    res.redirect("index.html")
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
