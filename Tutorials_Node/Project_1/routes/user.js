const express = require("express");

const router = express.Router();



//routes
 router.get("/" ,async (req, res)=> {
    const allDbUsers =  await User.find({})
    return res.json(allDbUsers) ;
})





router
    .route("/:id")
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






router.post("/", async(req, res) => {
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



    
    
})


module.exports = router ; 