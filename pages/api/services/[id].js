import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  updateServices,
  deleteServices,
  getServicesDetails,
} from "../../../backend/controllers/service";
const handler = nextconnect();
dbConnect();
handler.get(getServicesDetails).put(updateServices).delete(deleteServices);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
