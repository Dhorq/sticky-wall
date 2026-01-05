import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

const allowedOrigins = "http://localhost:5173";

app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use("/api/v1/product", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening to PORT ${PORT}`);
});
