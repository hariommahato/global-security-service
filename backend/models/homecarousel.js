import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});
export default mongoose.models?.HomeCarousel ||
  mongoose.model("HomeCarousel", carouselSchema);
