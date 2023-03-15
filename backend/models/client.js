import mongoose from "mongoose";

const clientSchema= new mongoose.Schema({
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
export default mongoose.models?.Client ||
  mongoose.model("Client", clientSchema);
