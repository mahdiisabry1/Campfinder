import express from "express";
import connectDB from "./lib/connectDB.js";

const app = express();
// code in between
app.use(express.json);

app.listen(3000, () => {
  connectDB();
  console.log("Serving on port 3000");
});
