const  fs = require("fs");
const os = require('os');

console.log(os.cpus().length)// 4 mere system mai 4 cores hai cpu mai matlab 4 threads 

console.log("1")


 // non Blocking
const result  = fs.readFile('contact.txt' , "utf-8", (err , result)=> {
console.log(result);
});

console.log("2")
console.log("6")
console.log("4")
console.log("5")



// the non blocking operation is having nature of non blocking teh whole functioning of the code 
// it does teh work in background until and unless the work is not completed it does rest of teh tasks 
// then prints the asynchronous tasks 


// default Thread pool size - 4 
// Max -???   --->>> 8 coreCPU => 8 threads 

