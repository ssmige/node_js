import Category from "./models/Category.js";
import Product from "./models/Product.js";

import mongoose from "mongoose";

export async function createCategory(req, res) {
  const { title, description } = req.body;

  try {
    const category = new Category({ title, description });

    await category.save();

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createProduct(req, res) {
  const { title, price } = req.body;

  try {
    const product = new Product({ title, price });

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
