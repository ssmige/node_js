import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  engine: String,
  power: String,
  year: Number,
});

const carModel = mongoose.model("Car", carSchema);

export default carModel;
