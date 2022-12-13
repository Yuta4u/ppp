import express from "express"
import multer from "multer"

const router = express.Router()

import PostProduct from "../controllers/product.js"
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images")
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + "-" + file.originalname)
  },
})
var upload = multer({ storage: storage })

router.use(upload.single("image"))
router.post("/product", PostProduct)

export default router
