function add (a , b  ){
    return a+b ;
}
function sub (a , b  ){
    return a - b ;
}


 // exporting  multiple  work  functions 
 module.exports = {

    add , sub 
 } ; 
 // exporting different ways  
 exports.add = (a, b )=> a+b ;
exports.sub = (a, b )=> a - b ;

 