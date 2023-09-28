import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 50,
  },
  price: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("Product", ProductSchema);
