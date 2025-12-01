const express = require("express");
const users = require('./MOCK_DATA.json')

const app = express();

const PORT = 5555 ; 

//routes
app.get("/api/users" , (req, res)=> {
    return res.json(users) ;
})
// app.get("/users" , (req, res)=> {
//     const html =   `
//     <ul>
//         ${users.map((user)=> `<li> ${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
//})



app
    .route("/api/users/:id")
    .get("/api/users/:id" , (req, res)=> {
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
    return res.json({status : "status pending"});
    
})


app.listen(PORT , ()=> {
    console.log(`Server Started at: http://localhost:${PORT}/users`)
})