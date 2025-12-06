const express = require("express");
const users = require('./MOCK_DATA.json')
const fs = require("fs")
const app = express();

const PORT = 5555 ; 
//MiddleWares -> Plugins
app.use(express.urlencoded({extended : false}));



// using middlewares in this 



app.use((req,res , next )=>{
    console.log("hello from Middlewares  1"); 
             // till this we hold the call upto us and not ending the response not passing the request
   // return res.json({mgs : "hello from middlewares 1 "}); 
            // here we are ending teh response an dnot calling teh another function
            // but here if we call next(); that will pass my request from middleware 1 to iddle ware next present or to the  direct fucntion run 
        // case 2 
    req.myUserName = 'Shivamkamal.dev';
        next();
        // thats done passed teh request to next middleware prent 

})


app.use((req,res , next )=>{
    //console.log("hello from Middlewares 2" ); 
    // till this we hold the call upto us and not ending the response not passing the request
        //case 2 
    

    console.log("hello from Middlewares 2"  , req.myUserName); 
   // return res.json({mgs : "Helooooo"}); 
       next();
})
// now going  to the direct routes 
// as all the middlewares are passed 

//--------------------------------------------------
//routes
 app.get("/api/users" , (req, res)=> {
    console.log("I am in get route " , req.myUserName);
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