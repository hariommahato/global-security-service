import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please Enter the FullName"],
  },
  message: {
    type: String,
    required: true,
  },

},{timestamps:true});
export default mongoose.models?.Feedback ||
  mongoose.model("Feedback", feedbackSchema);
