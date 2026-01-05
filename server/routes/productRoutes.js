import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.post("/", addProduct);
productRouter.put("/edit/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
