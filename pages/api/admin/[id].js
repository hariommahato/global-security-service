import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateProfile,deleteUser,getSingleUser} from '../../../backend/controllers/adminController'
const handler=nextconnect();
dbConnect();
handler.get(getSingleUser).put(updateProfile).delete(deleteUser);


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;