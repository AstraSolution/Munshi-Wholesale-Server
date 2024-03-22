const app = require("./app");
const connectDB = require("./src/config/db");
const { serverPort } = require("./src/secret");

// Start the server
app.listen(serverPort, async () => {
  await connectDB();
  console.log(`Munshi Wholesale is running at http://localhost:${serverPort}`);
});
