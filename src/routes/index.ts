import  express  from "express";
import { 
    createUser, 
} from '../controllers/index';

const router = express.Router();

router.post('/CreateNewUser', createUser);



export default router;