const express = require('express');
const app = express();
const PORT=5000;

// req => what we send to server
// res => what we receive from server

app.get('/login', function (req, res) {
  res.send('Hello login page')
})

app.listen(PORT,()=>{
    console.log("The server has started on port",PORT);
});