const app = require("./app");
const http = require("http");
const port = process.env.PORT || 3030;

const server = http.createServer(app);

server.listen(port, ()=>{
  console.log(`Server is listening from port ${port}`)
})