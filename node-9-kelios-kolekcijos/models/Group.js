import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  logo: {
    type: String,
  },
  people: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
  ],
});

export default mongoose.model("Group", GroupSchema);
