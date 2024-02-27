const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB = process.env.DATABASE;
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
