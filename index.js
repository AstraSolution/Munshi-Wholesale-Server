// const app = require("./app");
// const connectDB = require("./src/config/db");
const { serverPort } = require("./src/secret");

// // Start the server
// app.listen(serverPort, async () => {
//   await connectDB();
//   console.log(`Munshi Wholesale is running at http://localhost:${serverPort}`);
// });

require("dotenv").config;
const http = require("http");
const app = require("./app");
const connectToDB = require("./src/config/db");
const server = http.createServer(app);
// const port = process.env.PORT || 5000;

const main = async () => {
  await connectToDB();
  server.listen(serverPort, () => {
    console.log(
      `Munshi Wholesale server is running on: http://localhost:${serverPort}`
    );
  });
};

main();
