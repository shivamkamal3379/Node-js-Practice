const  fs = require("fs");





//            creating files 
// .. sync 
 //fs.writeFileSync("./test.txt", " hey there ")

  //async 
 // fs.writeFile("./test.txt" , " hello world async " , (err)=> {})
//               reading file / extracting data from files 
    const result = fs.readFileSync("./contact.txt" , "utf-8") ; 
 console.log(result);



//   if we did the same read file task via  "fs.readFile " then that would be not possible as second thing we have to  use a call back function in this a the callback is always expected from this for example 


fs.readFile("./contact.txt" , "utf-8" , (err , result ) => {
    if (err) {
        console.log( "error is", err);
    }
    else {
        console.log(result);
    }
})

//   that function is void that cannot return anything that would give error 

//           appending files 


// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString()) ; 



fs.appendFileSync("./test.txt" ,` ${Date.now()}hello this message was done by shiva kamal \n`) ; 
 

fs.cpSync("./test.txt" , 'copy.txt' )



// deleting files  using fs ,ethod unlink 
// fs.unlinkSync("./copy.txt")

// console.log(
//     fs.statSync("./test.txt"))
//  fs.mkdirSync("my-docss/a/b" ,{recursive :true} )




// these editing , creating , opening , deleting , and other functions can not be done in vanila java script 