const express = require("express");
const port = 5000;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Harshal");
});

app.post("/", (req, res) => {
  let data = req.body;
  console.log(data);
});
app.listen(port, () => console.log(`app is running on port ${port}`));
