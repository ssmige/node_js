import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user_id: String,
  date: Date,
  comment: String,
});

export default mongoose.model("Comment", CommentSchema);
