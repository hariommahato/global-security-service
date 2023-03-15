import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "../../backend/controllers/userController";
import nextConnect from "next-connect";

const handler = nextConnect();
dbConnect();
handler.post(registerUser);
export default handler;
