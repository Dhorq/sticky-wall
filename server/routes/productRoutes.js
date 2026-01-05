import express from "express";

const productRouter = express.Router();

productRouter.get("/");
productRouter.post("/");
productRouter.put("/edit");
productRouter.delete("/delete");

export default productRouter;
