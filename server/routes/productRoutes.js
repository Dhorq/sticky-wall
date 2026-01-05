import express from "express";

const productRouter = express.Router();

productRouter.get("/");
productRouter.post("/");
productRouter.put("/edit/:id");
productRouter.delete("/delete/:id");

export default productRouter;
