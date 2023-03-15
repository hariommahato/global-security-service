import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: [true, "Please Enter the Title"],
  },
  description:{
    type:String,
    required:[true,"Please Enter Description"]
  }
});
export default mongoose.models?.Service ||
  mongoose.model("Service", servicesSchema);
