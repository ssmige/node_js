import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 50,
  },
  description: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 100,
  },
});

export default mongoose.model("Category", CategorySchema);
