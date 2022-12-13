//
import express from "express"

//routes
import profile from "./profile.js"

const router = express.Router()

router.use(profile)

export default router
