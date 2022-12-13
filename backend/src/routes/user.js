import {
  Register,
  Login,
  getUsers,
  getUserLogin,
  Topup,
} from "../controllers/user.js"
import { refreshToken } from "../controllers/refreshToken.js"
import express from "express"
import { verifyToken } from "../middleware/VerifyToken.js"
const router = express.Router()

router.post("/users", getUserLogin)
// router.post("/users", Login)
router.post("/register", Register)
router.post("/login", Login)
router.get("/token", refreshToken)
router.post("/topup", Topup)
export default router
