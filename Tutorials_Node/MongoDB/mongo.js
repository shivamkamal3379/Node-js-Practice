const express = require("express");
const users = require('./MOCK_DATA.json')
const fs = require("fs")
const mongoose = require('mongoose');


const app = express();
const PORT = 5555 ; 

// Connecting mongo db 

mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>{
    console.log("Mongo DB connected")
})
.catch(err =>console.log("Mongo DB Error ", err) )



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


const User = mongoose.model("user" , userSchema);





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




app.post("/api/users", async(req, res) => {
    const body = req.body;

    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    const result  = await User.create({
    firstName  : body.last_name ,
    lastName :body.first_name , 
    email: body.email,
    gender : body.gender , 
    jobTitle : body.job_title
   });

    console.log("result " , result);
   return res.status(201).json({  mesg : "Message Success"  });



 //  now adding this to my  mock data
    users.push({...body ,  id : users.length+1});
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err , data)=> {
        return res.json({status : "Success" , id:users.length});

    })
    
})


app.listen(PORT , ()=> {
    console.log(`Server Started at: http://localhost:${PORT}/users`)
})