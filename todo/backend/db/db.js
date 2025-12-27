import mongoose from "mongoose";
import process from "process";

async function connectDB() {
  let url = process.env.MONGO_DB_URL;

  try {
    await mongoose.connect(url);
    console.log("Database Connected :", mongoose.connection.name);
  } catch (error) {
    console.log("eror while connecting DB", error);
    process.exit(1);
  }
}

export default connectDB;
