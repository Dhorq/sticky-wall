import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.end("Hi");
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
