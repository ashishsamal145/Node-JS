import express from "express";
import mongoose from "mongoose";
import userModel from "./model/userModel.js";

const app = express();
const PORT=4000;

//inbuilt middleware
app.use(express.json())

const MONGO_URL = 'mongodb://127.0.0.1:27017/Node_July';

mongoose.connect(MONGO_URL);
console.log("Mongodb is connected");

app.get('/',(req,res)=>{
    res.send("Welcome to UserList");
})

//add user
app.post('/addUser',(req,res)=>{
    userModel.create(req.body).then(()=>{
        res.send("User added successfully");
    })
})

//get users

app.get('/getUser',(req,res)=>{
    userModel.find().then((result)=>{
        res.send(result);
    })
})

//delte user

app.delete('/deleteUser',(req,res)=>{
    userModel.findOneAndDelete({name: req.body.name}).then((result)=>{
        res.send('USer deleted successfully');
    })
})

//update user

app.put('/updateUser',(req,res)=>{
    userModel.findOneAndUpdate(
        {name: req.body.name},
        {
            $set: {
                name:req.body.name,
                age: req.body.age,
                city: req.body.city
            }
        },
        {upsert:true}
        )
        .then((result)=>{
        res.send('USer updated successfully');
        }
    )
})

app.listen(PORT,()=>{
    console.log("The server has been started on port ",PORT);
})
