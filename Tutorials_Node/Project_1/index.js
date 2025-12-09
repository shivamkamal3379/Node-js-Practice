const express = require("express");
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
} , {timestamps : true })



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
 app.get("/api/users" ,async (req, res)=> {
    const allDbUsers =  await User.find({})
    return res.json(allDbUsers) ;
})


app.get("/users" , async(req , res)=> {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>   ${user.firstName} -${user.email} </li>`)}
    </ul>    `
    res.send(html);
})




app
    .route("/api/users/:id")
    .get( async(req, res)=> {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404)

        return res.json(user);
        })
    .patch(async(req, res)=> {
        await User.findByIdAndUpdate(req.params.id , {lastName : "Changed"})
        //Edit user with user id 
        return res.json({status: "Status Success"});
        })
    .delete( async(req, res)=> {
         //delete user with user id 
        await User.findByIdAndDelete(req.params.id);
         return res.json({status: "Status Success"});
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
    
    
})


app.listen(PORT , ()=> {
    console.log(`Server Started at: http://localhost:${PORT}/users`)
})