import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createAboutData,
  getAllAbout,
} from "../../../backend/controllers/about";

const handler = nextconnect();
dbConnect();
handler.post(createAboutData).get(getAllAbout);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}

export default handler;
