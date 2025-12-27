import mongoose from "mongoose";
import process from "process";

async function connectDB() {
  let url = "mongodb+srv://48vineet:Vineet%40123@airbnb.5tsow.mongodb.net/todo";
  try {
    await mongoose.connect(url);
    console.log("Database Connected :", mongoose.connection.name);
  } catch (error) {
    console.log("eror while connecting DB", error);
    process.exit(1);
  }
}

export default connectDB;
