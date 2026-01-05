import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Product = mongoose.model("product", productSchema);

export default Product;
