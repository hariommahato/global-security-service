import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createServices,
  getAllServices
} from "../../../backend/controllers/service";

const handler = nextconnect();
dbConnect();
handler.post(createServices).get(getAllServices);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
