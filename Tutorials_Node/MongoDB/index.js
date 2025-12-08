const express = require("express");
const users = require('./MOCK_DATA.json')
const fs = require("fs")
const mongoose = require('mongoose');


const app = express();
const PORT = 5555 ; 

// Schema 
const userSchema = new mongoose.Schema({
    firstName :
        {
            type : String ,
            required: true ,
        },
    lastName :
        {
            type : String , 
        },
    email :
        {
            type : String , 
            required : true , 
            unique: true ,
        },
    jobTitle :
        {
            type : String , 
        },
    gender :
        {
            type : String , 
        },
})



//MiddleWares -> Plugins
app.use(express.urlencoded({extended : false}));




app.use((req,res , next )=>{
    console.log("hello from Middlewares  1"); 
 
    req.myUserName = 'Shivamkamal.dev';
        next();
        // thats done passed teh request to next middleware prent 

})


app.use((req,res , next )=>{
    console.log("hello from Middlewares 2"  , req.myUserName); 
    next();
  
    

  
})
// now going  to the direct routes 
// as all the middlewares are passed 

//--------------------------------------------------
//routes
 app.get("/api/users" , (req, res)=> {
    console.log("I am in get route " , req.myUserName);
    res.setHeader("X-MyName" , "Shivam Kamal");
    // custom header 
    // always add X to custom header
    return res.json(users) ;
})



app
    .route("/api/users/:id")
    .get( (req, res)=> {
        const id = Number(req.params.id);
        const user = users.find(user =>  user.id ===id );
        return res.json(user);
        })
    .patch((req, res)=> {
        //Edit user with user id 
        return res.json({status: "Status Pending"});
        })
    .delete( (req, res)=> {
         //delete user with user id 
        return res.json({status: "Status Pending"});
        })


//  app.get("/api/users/:id" , (req, res)=> {
//     const id = Number(req.params.id);
//     const user = users.find(user =>  user.id ===id );
//     return res.json(user);

//       });

// app.patch("/api/users" , (req,res)=>{
//     // TODO Edit user  with this id 
//     return res.json({status : "status pending"});
    
// })


// app.delete("/api/users" , (req,res)=>{
//     // TODO : delete user  with this id 
//     return res.json({status : "status pending"});
    
// })




app.post("/api/users" , (req,res)=>{
    //TODO create a new user
    const body = req.body;
   console.log("Body" , body)
 //  now adding this to my  mock data
    users.push({...body ,  id : users.length+1});
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err , data)=> {
        return res.json({status : "Success" , id:users.length});

    })
    
})


app.listen(PORT , ()=> {
    console.log(`Server Started at: http://localhost:${PORT}/users`)
})