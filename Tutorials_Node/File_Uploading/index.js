const path = require("path");
const express = require("express");
const multer = require("multer");



const app = express();
const PORT = 8001 ; 


const storage = multer.diskStorage({
    destination : function(req,res,cb){

    },
    filename: function(req,res,cb){

    },
})
 

app.set("view engine" , "ejs");
app.set("views",path.resolve("./views"));

app.use(express.json() );
app.use(express.urlencoded({extended: false}))

app.get("/" , (req, res)=>{
    return res.render("homepage");

});

app.post("/upload" , upload.single("ProfileImage") ,(req, res)=>{

    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")
});



app.listen(PORT , ()=> console.log("Server Started at PORT:8001"));


