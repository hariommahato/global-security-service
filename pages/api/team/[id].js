import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateTeam,deleteTeam,getTeamDetails} from '../../../backend/controllers/team'
const handler=nextconnect();
dbConnect();
handler.get(getTeamDetails).put(updateTeam).delete(deleteTeam);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;