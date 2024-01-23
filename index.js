const http = require("http");
const {router}= require("./router");


const server = http.createServer((req, res) => {
if (req.method==="POST" || req.method==="PUT"){
} else{
    Router(req,res);
}
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
