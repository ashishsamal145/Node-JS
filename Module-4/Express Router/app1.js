// const express = require('express');
// const { MongoClient } = require('mongodb');

import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";

import { moviesRouter } from "./routes/movies.js";


const app = express();
const PORT=5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

const MONGO_URL = 'mongodb://127.0.0.1:27017';


//mongodb connection

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    client.connect();
    console.log("Mongodb is connected");
    return client;
}

export const client= await createConnection();

// req => what we send to server
// res => what we receive from server

app.get('/',(req,res)=>{
    res.send("Hello Everyone");
})

app.use("/movies",moviesRouter);

app.listen(PORT,()=>{
    console.log("The server has been started on port ",PORT);
})
