import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connectDB from "./db/db.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// Health route
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

// Todo routes
app.use("/", todoRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Server connected successfully on port:", port);
});
