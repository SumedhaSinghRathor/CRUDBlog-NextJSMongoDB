import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxLength: [40, "Title cannot be more than 40 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxLength: [1000, "Description cannot be more than 1000 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
