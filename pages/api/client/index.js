import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createClient,
  getAllClient,
} from "../../../backend/controllers/client";

const handler = nextconnect();
dbConnect();
handler.post(createClient).get(getAllClient);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
