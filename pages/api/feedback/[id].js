import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateFeedback,deleteFeedback, getFeedbackDetails} from '../../../backend/controllers/feedback'
const handler=nextconnect();
dbConnect();
handler.get(getFeedbackDetails).put(updateFeedback).delete(deleteFeedback);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;