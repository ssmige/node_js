import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 200,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 200,
  },
  user_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("Service", ServiceSchema);
