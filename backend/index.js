import cors from "cors"
import db from "./src/config/db_config.js"
import bodyParser from "body-parser"
import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

//routes
dotenv.config()
const app = express()

// import profileRoutes from "./src/routes/user"
import user from "./src/routes/user"
import product from "./src/routes/product"
// import routes from "./src/routes/index.js"

//routes

app.use(bodyParser.json()) // untuk memparser json body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use(user)

db.sync({ alter: true })
  .then(() => {})
  .catch((err) => console.log(err))

const port = 3333

// const cekFileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }

// app.use("/images", express.static(path.join(__dirname, "../images")))

db.authenticate().then(() => {
  app.listen(port, () =>
    console.log(`server running at http://localhost:${port}`)
  )
})
