const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      process.env.DB_URL,
      { useUnifiedTopology: true, useCreateIndex: true }
    )
    .then((data) => {
      console.log(`MongoAtlas connected with server: ${data.connection.host}`);
    })
    
};
 
module.exports = connectDB;
