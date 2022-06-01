const express = require("express");

const app =  express();
const dbconf = require("./db")

const room = require('./router/room')
app.use('/getroom',room);

const port = process.env.port || 8888;
app.listen (port,()=> console.log(`server started using port ${port}`));