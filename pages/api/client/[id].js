import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateClient,deleteClient,getClientDetails} from '../../../backend/controllers/client'
const handler=nextconnect();
dbConnect();
handler.get(getClientDetails).put(updateClient).delete(deleteClient);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;