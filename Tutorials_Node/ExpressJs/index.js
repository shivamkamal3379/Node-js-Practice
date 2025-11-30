const http = require ("http");
const express = require ("express");

const app = express();


app.get('/', (req, res)=> {
    return res.send('hello From Home Page ');
});

app.get('/about', (req,res)=> {
    return res.send("Hello From About Page ");
});



// thsi is not required as it was replaced with the help of express
 function myHandler(req, res){
    const log = `${Date.now()}:${req.url}" New Request Received\n`
    const myUrl = url.parse(req.url , true );
    console.log(myUrl)
    fs.appendFile('log.txt', log , (err, data)=>{

    switch(myUrl.pathname){
        case '/' :res.end("Home Page");
        break;
        case '/about' :
             const userName = myUrl.query.myname
            res.end(`hi i am ${userName}   `);
        break;

        case '/search':
            const searching = myUrl.query.search_query;
            res.end(`${searching} is searched`);
            break;
        case '/Signup':
            if(req.method ==='GET') res.end("This is a signUp Form ");
            else if(req.method ==='POST'){
                // DB Query
                res.end("Success");
            }
            break ;
        default:
            res.end("404 Not Found")
    }
     
})
};


app.listen('5555' , ()=>{console.log("Server is Started ")})



// const myServer =http.createServer(app);

// myServer.listen(5555 , ()=>{
//     console.log("Server Started");
// });

