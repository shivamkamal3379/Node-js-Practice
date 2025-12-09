const express = require("express");
const fs = require("fs")
 const {connectMongoDb} =  require("./connection")
const userRouter = require('./routes/user')
 const {logReqRes} = require ("./middlewares")

const app = express();
const PORT = 5555 ; 

// Connecting mongo db 
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(()=>{
    console.log("Mongo DB Conected ")
})

// middleWares
app.use(express.urlencoded({exteded: false}))
app.use(logReqRes("log.txt")) ; 

// routes 
app.use("/api/user" , userRouter);



app.listen(PORT , ()=> {
    console.log(`Server Started at: http://localhost:${PORT}/users`)
})