const express = require('express');
const fs=require('fs');
const app = express();
const PORT=5000;

// req => what we send to server
// res => what we receive from server

app.get('/', function (req, res) {
  res.send('Hello Everyone to node JS class')
})

app.get("/getmovies",function(req,res){
    fs.readFile("./movie.json",(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(JSON.parse(result));
        }
    })
})

app.listen(PORT,()=>{
    console.log("The server has started on port",PORT);
});
 