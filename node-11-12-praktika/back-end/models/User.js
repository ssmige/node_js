import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 30,
  },

  surname: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 80,
  },

  email: {
    type: String,
    require: true,
    minLength: 6,
    maxLength: 100,
  },

  service_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

export default mongoose.model("User", UserSchema);
