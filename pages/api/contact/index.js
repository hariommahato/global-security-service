import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createContact,
  getAllContactData,
} from "../../../backend/controllers/contactus";

const handler = nextconnect();
dbConnect();
handler.post(createContact).get(getAllContactData);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
