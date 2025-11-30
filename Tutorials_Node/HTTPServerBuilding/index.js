const http = require ("http");



const fs = require("fs");



const myServer = http.createServer((req, res)=> {
    const log = `${Date.now()}:${req.url}" New Request Received\n`
fs.appendFile('log.txt', log , (err, data)=>{
    switch(req.url){
        case '/' :res.end("HomePage");
        break;
        case '/about' :res.end("i am shivam Kamal ");
        break;
        default:
            res.end("404 Not Found")
    }
    res.end("Hello from Server Dubara seee ");
    
})
});

myServer.listen(5555 , ()=>{
    console.log("Server Started");
});

