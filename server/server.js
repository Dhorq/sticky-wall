import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/v1/product", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening to PORT ${PORT}`);
});
