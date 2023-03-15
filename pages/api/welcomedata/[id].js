import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updatelWelcomeData,deleteWelcomeData,getWelcomeDetails} from '../../../backend/controllers/homewelcome'
const handler=nextconnect();
dbConnect();
handler.get(getWelcomeDetails).put(updatelWelcomeData).delete(deleteWelcomeData);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;