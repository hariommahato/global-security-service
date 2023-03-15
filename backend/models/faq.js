import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter the Title"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Description"],
  },
  

},{timestamps:true});
export default mongoose.models?.Faq ||
  mongoose.model("Faq", faqSchema);
