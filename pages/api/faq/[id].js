import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateFaq,deletFaq,getfaqDetails} from '../../../backend/controllers/faq'
const handler=nextconnect();
dbConnect();
handler.get(getfaqDetails).put(updateFaq).delete(deletFaq);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;