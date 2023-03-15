import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createFeedback,
  getAllFeedback,
} from "../../../backend/controllers/feedback";

const handler = nextconnect();
dbConnect();
handler.post(createFeedback).get(getAllFeedback);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
