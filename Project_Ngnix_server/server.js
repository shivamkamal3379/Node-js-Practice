const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  //   req.url==='/' => 'index.html'
  path.join(__dirname, req.url === "/" ? "" : "");
});

server.listen(port, () => {
  console.log(`server  is listening on port ${port}`);
});
// this will be continues  tomorrow  only for a git message thsi was done only  for that 