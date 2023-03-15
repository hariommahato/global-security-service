import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createFaq, getAllFaq } from "../../../backend/controllers/faq";

const handler = nextconnect();
dbConnect();
handler.post(createFaq).get(getAllFaq);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;
