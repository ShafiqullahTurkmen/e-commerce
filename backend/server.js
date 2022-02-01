const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/database");

// Handling Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to UUncaught exception`);
  process.exit(1);
});

// Config
dotenv.config({ path: "backend/config/config.env" });

//Connecting to database
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
