import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createWelcomeData,
  getAllWelcomeData
} from "../../../backend/controllers/homewelcome";

const handler = nextconnect();
dbConnect();
handler.post(createWelcomeData).get(getAllWelcomeData);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
