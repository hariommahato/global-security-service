import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createTeamData,
  getAllTeam,
} from "../../../backend/controllers/team";

const handler = nextconnect();
dbConnect();
handler.post(createTeamData).get(getAllTeam);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '1000mb' // Set desired value here
      }
  }
}
export default handler;
