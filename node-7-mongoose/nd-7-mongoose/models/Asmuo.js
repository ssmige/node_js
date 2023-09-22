import mongoose from "mongoose";

const asmuoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 100,
  },
  lastName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 110,
  },
});

export default mongoose.model("Asmuo", asmuoSchema);
