const { setUpServer } = require("./server");
const PORT = process.env.port || 3000;
const server = setUpServer();
server.listen(PORT, () => {
  console.log("server is up and running");
});
