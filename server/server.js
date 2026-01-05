import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/v1", productRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
