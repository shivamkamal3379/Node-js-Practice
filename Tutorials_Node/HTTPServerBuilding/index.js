const http = require ("http");

const url = require("url");

const fs = require("fs");
 


const myServer = http.createServer((req, res)=> {

    const log = `${Date.now()}:${req.url}" New Request Received\n`
    const myUrl = url.parse(req.url , true );
    console.log(myUrl)
    fs.appendFile('log.txt', log , (err, data)=>{

    switch(myUrl.pathname){
        case '/' :res.end("HomePage");
        break;
        case '/about' :
             const userName = myUrl.query.myname
            res.end(`hi i am ${userName}   `);
        break;

        case '/search':
            const searching = myUrl.query.search_query;
            res.end(`${searching} is searched`);
            break;
        default:
            res.end("404 Not Found")
    }
    // res.end("Hello from Server Dubara seee ");
    
})
});

myServer.listen(5555 , ()=>{
    console.log("Server Started");
});

