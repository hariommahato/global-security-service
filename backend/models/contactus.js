import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please Enter the FullName"],
  },
  number: {
    type: Number,
    required: [true, "Please Enter Contact Number"],
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
  },

},{timestamps:true});
export default mongoose.models?.ContactUs ||
  mongoose.model("ContactUs", contactSchema);
