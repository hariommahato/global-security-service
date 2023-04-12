import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateAbout,deleteAbout,getAboutDetails} from '../../../backend/controllers/about'
const handler=nextconnect();
dbConnect();
handler.get(getAboutDetails).put(updateAbout).delete(deleteAbout);
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
}

export default handler;