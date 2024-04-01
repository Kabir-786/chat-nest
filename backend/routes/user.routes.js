import express from "express"
import { geUserBySidebar} from '../controller/user.controller.js'
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router()

router.get('/', protectRoute, geUserBySidebar)

export default router
