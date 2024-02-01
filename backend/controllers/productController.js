import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.status(200).json(product);
  }
  res.status(404);
  throw new Error("product not found");
});
