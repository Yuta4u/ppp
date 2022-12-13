import Users from "../models/user"
import jwt from "jsonwebtoken"

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) return res.sendStatus(401)
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    })
    if (!user[0]) return res.sendStatus(403)
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403)
        const userId = user[0].id
        const name = user[0].name
        const address = user[0].address
        const gender = user[0].gender
        const email = user[0].email
        const phone_number = user[0].phone_number
        const accessToken = jwt.sign(
          { userId, name, address, gender, email, phone_number },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "45s",
          }
        )
        res.json({ accessToken })
      }
    )
  } catch (error) {
    console.log(error)
  }
}
