import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createHomeCarousel,
  getAllCarousel,
} from "../../../backend/controllers/homecarousel";

const handler = nextconnect();
dbConnect();
handler.post(createHomeCarousel).get(getAllCarousel);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '300000mb' // Set desired value here
      }
  }
}
export default handler;
