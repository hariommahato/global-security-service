import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  fullname: {
    type: String,
    required: [true, "Please Enter the Fullname "],
  },
  post:{
    type: String,
    required: [true, "Please Enter the Post Of User"],
  },
  description:{
    type: String,
    required: [true, "Please Enter the Description"],
  },



});
export default mongoose.models?.Team || mongoose.model("Team", teamSchema);
