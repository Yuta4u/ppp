import Users from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    })
    res.json(users)
  } catch (error) {
    console.log(error)
  }
}

export const getUserLogin = async (req, res) => {
  try {
    const userLogin = await Users.findOne({
      where: {
        email: req.body.email,
        // refresh_token: req.body.refresh_token,
      },
    })
    res.json(userLogin)
  } catch (err) {
    console.log(err)
  }
}

export const Register = async (req, res) => {
  const { name, address, gender, email, phone_number, password } = req.body
  console.log(req.body)
  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    await Users.create({
      name,
      address,
      gender,
      email,
      phone_number,
      password: hashPassword,
    })
    res.json({ msg: "Registration Successful" })
  } catch (error) {
    return error
  }
}

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    })
    const match = await bcrypt.compare(req.body.password, user[0].password)
    if (!match) return res.status(400).json({ msg: "Wrong Password" })
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
        expiresIn: "20s",
      }
    )
    const refreshToken = jwt.sign(
      { userId, name, address, gender, email, phone_number },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    )
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    )
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    res.json({ accessToken })
  } catch (error) {
    // res.status(404).json({ msg: "Email not found" })
    error
  }
}

export const Topup = async (req, res) => {
  console.log(req.body)
  try {
    const update = await Users.update(
      {
        balance: req.body.balance,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then((result) => {
      res.status(200).json({
        message: "BERHASIL",
        data: result,
      })
    })
  } catch (err) {
    console.log(err)
  }
}
