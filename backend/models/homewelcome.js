import mongoose from "mongoose";

const homeWelcomeTextSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: [true, "Please Enter the Description text"],
  },
});
export default mongoose.models?.homeWelcomeText ||
  mongoose.model("homeWelcomeText", homeWelcomeTextSchema);
